import * as fs from "fs";
import {parse} from "csv-parse/sync";

export class DataProvider {

    static getTestDataFromCSV(filePath: string): any[] {
        const fileContent = fs.readFileSync(filePath);
        return parse(fileContent, { columns: true, skip_empty_lines: true });
    }

    static getTestDataFromJSON(filePath: string): any {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(fileContent);
    }
}