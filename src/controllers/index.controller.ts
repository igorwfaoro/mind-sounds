import { NextFunction, Request, Response, Router } from "express";
import { RenderHelper } from "../common/helpers/render.helper";

const IndexController = Router();

IndexController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.render('index/view-index', {
            ...RenderHelper.getDefaultRenderParams()
        });
    } catch (error) {
        next(error);
    }
});

export { IndexController };