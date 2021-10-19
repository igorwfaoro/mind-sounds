import { NextFunction, Request, Response, Router } from "express";
import * as moment from 'moment-timezone';

const IndexController = Router();

IndexController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {

        const general = require(`${process.cwd()}/src/data/general.json`);
        const year = moment().format('YYYY');

        res.render('index/view-index', {
            general,
            year
        });
    } catch (error) {
        next(error);
    }
});

export { IndexController };