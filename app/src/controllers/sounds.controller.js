"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundsController = void 0;
const express_1 = require("express");
const SoundsController = (0, express_1.Router)();
exports.SoundsController = SoundsController;
SoundsController.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sounds = require(`${process.cwd()}/src/data/sounds.json`);
        res.json(sounds);
    }
    catch (error) {
        next(error);
    }
}));
SoundsController.get('/audio/:name', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.setHeader('Content-Type', 'video/mp4');
        res.status(200).sendFile(`${process.cwd()}/assets/audio/${req.params.name}`);
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=sounds.controller.js.map