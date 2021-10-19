import { NextFunction, Request, Response, Router } from "express";

const SoundsController = Router();

SoundsController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {

        const sounds = require(`${process.cwd()}/src/data/sounds.json`);
        res.json(sounds);

    } catch (error) {
        next(error);
    }
});

SoundsController.get('/audio/:name', async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.setHeader('Content-Type', 'video/mp4');

        res.status(200).sendFile(`${process.cwd()}/assets/audio/${req.params.name}`);

    } catch (error) {
        next(error);
    }
});

export { SoundsController };