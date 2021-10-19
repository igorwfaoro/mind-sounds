"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const config_1 = require("./src/config");
const routes_1 = require("./src/routes");
const ejs = require("ejs");
const moment = require("moment-timezone");
const on_error_1 = require("./src/common/functions/on-error");
const app = express();
moment.locale('pt-br');
app.use(cors());
app.options('*', cors());
app.use(express.json());
ejs.delimiter = '?';
app.set('view engine', 'ejs');
app.set('views', `${process.cwd()}/src/views`);
app.use(express.static(`${process.cwd()}/src/public`, {
    lastModified: true,
    etag: false
}));
app.use('/files', express.static(`${process.cwd()}/files`));
app.use(routes_1.routes);
app.use(on_error_1.onError);
app.listen(config_1.CONFIG.PORT, config_1.CONFIG.HOST, () => {
    console.log(`Running on ${config_1.CONFIG.HOST ? 'http://' + config_1.CONFIG.HOST + ':' + config_1.CONFIG.PORT : config_1.CONFIG.PORT}`);
});
//# sourceMappingURL=app.js.map