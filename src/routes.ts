import { Router } from "express";
import { IndexController } from "./controllers/index.controller";
import { SoundsController } from "./controllers/sounds.controller";

const routes = Router();

routes.use('/', IndexController);
routes.use('/sounds', SoundsController);

export { routes };