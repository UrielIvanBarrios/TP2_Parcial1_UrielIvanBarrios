import path from "node:path";
import { fileURLToPath } from "node:url";
import { JsonHandler } from "../utils/jsonHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class JsonRepository {
	constructor(dbPath) {
		this.dbPath = path.join(__dirname, `../db/${dbPath}`);
	}

	getAll = async () => {
		try {
			return await JsonHandler.read(this.dbPath);
		} catch (error) {
			throw new Error(
				`Error al traer desde la base de datos - ${error.message}`,
			);
		}
	};

	getById = async (id) => {
		const bd = await this.getAll();
		if (!bd) throw new Error("La base de datos esta vacia");
		const element = bd.find((e) => e.id === id);
		if (!element) throw new Error("Elemento inexistente en base de datos");
		return element;
	};

	createOne = async (element) => {
		const db = await this.getAll();
		db.push(element);
		await JsonHandler.write(this.dbPath, db);
		return element;
	};

	updateElement = async (id, element) => {
		const db = await this.getAll();
		const elementIndex = db.findIndex((e) => e.id === id);
		if (elementIndex < 0)
			throw new Error("Elemento no encontrado en la base de datos");
		db[elementIndex] = element;
		await JsonHandler.write(this.dbPath, db);
		return element;
	};
	deleteElement = async (id) => {
		const db = await this.getAll();
		const elementIndex = db.findIndex((e) => e.id === id);
		if (elementIndex < 0)
			throw new Error("Elemento no encontrado en la base de datos");
		const element = db.splice(elementIndex, 1)[0];
		await JsonHandler.write(this.dbPath, db);
		return element;
	};
}
