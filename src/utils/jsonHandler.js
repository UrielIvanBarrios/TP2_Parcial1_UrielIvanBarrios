import fs from "node:fs/promises";

export const JsonHandler = {
	read: async (path) => {
		try {
			const db = await fs.readFile(path, { encoding: "UTF-8" });
			return db ? JSON.parse(db) : [];
		} catch (error) {
			throw new Error(`Error al leer datos - ${error.message}`);
		}
	},
	write: async (path, element) => {
		try {
			if (!element) throw new Error("No hay elementodds para añadir");
			const elementStr = JSON.stringify(element, null, 2);
			await fs.writeFile(path, elementStr, { encoding: "UTF-8" });
		} catch (error) {
			throw new Error(`Error al escribir datos - ${error.message}`);
		}
	},
};
