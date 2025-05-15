import fs from "node:fs/promises";

export const TextHandler = {
	read: async (path) => {
		try {
			return await fs.readFile(path, { encoding: "UTF-8" });
		} catch (error) {
			throw new Error(`Error al leer el texto ${error.message}`);
		}
	},
	write: async (path, file) => {
		try {
			if (!file) throw new Error("texto vacio");
			await fs.writeFile(path, file, { encoding: "UTF-8" });
		} catch (error) {
			throw new Error(`Error al escribir el texto - ${error.message}`);
		}
	},
};
