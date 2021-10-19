require('dotenv').config();
import * as express from 'express';
import * as cors from 'cors';
import { CONFIG } from "./src/config";
import { routes } from "./src/routes";
import * as ejs from 'ejs';
import * as moment from 'moment-timezone';
import { onError } from './src/common/functions/on-error';

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

app.use(routes);

app.use(onError);

app.listen(CONFIG.PORT, CONFIG.HOST, () => {
    console.log(`Running on ${CONFIG.HOST ? 'http://' + CONFIG.HOST + ':' + CONFIG.PORT : CONFIG.PORT}`);
});