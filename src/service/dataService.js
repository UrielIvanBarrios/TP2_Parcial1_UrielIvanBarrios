import { CsvRepository } from "../repository/csvRepository.js";
import { Downloader } from "../utils/downloader.js";

const DataRepository = new CsvRepository("../db/dataDb.csv");
const url =
	"https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv";

export const DataService = {
	agregarCsv: async () => {
		const csv = await Downloader.Text(url);
		await DataRepository.saveCsv(csv);
	},
};
