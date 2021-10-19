"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const index_controller_1 = require("./controllers/index.controller");
const sounds_controller_1 = require("./controllers/sounds.controller");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/', index_controller_1.IndexController);
routes.use('/sounds', sounds_controller_1.SoundsController);
//# sourceMappingURL=routes.js.map