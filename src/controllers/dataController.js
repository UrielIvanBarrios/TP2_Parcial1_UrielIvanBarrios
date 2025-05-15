import { DataService } from "../service/dataService.js";

export const DataController = {
	agregarCsv: async (req, res) => {
		try {
			await DataService.agregarCsv();
			res.status(201).json({
				status: "Success",
				message: "Cvs incorporado exitosamente",
			});
		} catch (error) {
			res.status(404).json({
				status: "not found",
				message: error.message,
			});
		}
	},
};
