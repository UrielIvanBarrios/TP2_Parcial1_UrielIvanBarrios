import path from "node:path";
import { fileURLToPath } from "node:url";
import { TextHandler } from "../utils/textHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class CsvRepository {
	constructor(dbPath) {
		this.dbPath = path.join(__dirname, `../db/${dbPath}`);
	}

	saveCsv = async (file) => {
		await TextHandler.write(this.dbPath, file);
	};
}
