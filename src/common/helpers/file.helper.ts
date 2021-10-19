import * as fs from 'fs';
import { CONFIG } from '../../config';
import { v4 as uuidV4 } from 'uuid'
import { UploadedFile } from 'express-fileupload';

export abstract class FileHelper {

    public static saveFile(file: UploadedFile): string {
        const fileName = `${Date.now()}_${uuidV4()}.${file.name.split('.').pop()}`;
        file.mv(`${process.cwd()}/${CONFIG.FILES_DIR}/${fileName}`);

        return fileName;
    }

    public static deleteFile(fileName: string): void {
        fs.unlinkSync(`${process.cwd()}/${CONFIG.FILES_DIR}/${fileName}`);
    }

    public static getUrl(fileName: string): string {

        return `${CONFIG.PUBLIC_ADDRESS}/${CONFIG.FILES_DIR}/${fileName}`;
    }

    public static getFilePath(fileName: string): string {

        return `${CONFIG.FILES_DIR}/${fileName}`;
    }

    // public static getAllFiles(): Array<string> {

    //     let folderPath = `./files/${fileCategory}`;
    //     let filesContent = new Array<string>();

    //     let filesNames = fs.readdirSync(folderPath);
    //     filesNames.forEach(function (file: string) {
    //         const fileContent = fs.readFileSync(`${folderPath}/${file}`);
    //         const jsonContent = fileContent.toString();
    //         filesContent.push(jsonContent);
    //     });

    //     return filesContent;
    // }
}