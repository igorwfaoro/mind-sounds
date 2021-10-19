import * as moment from 'moment-timezone';
import { CONFIG } from '../../config';

export abstract class RenderHelper {

    public static getDefaultRenderParams() {
        return {
            general: require(`${process.cwd()}/src/data/general.json`),
            year: moment().format('YYYY'),
            googleAnalyticsKey: CONFIG.GOOGLE_ANALYTICS_KEY
        }
    }
}