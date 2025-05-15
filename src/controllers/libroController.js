import { LibroService } from "../service/libroService.js";

export const LibroController = {
	traerLibros: async (req, res) => {
		try {
			const db = await LibroService.traerLibros();
			res.status(200).json({
				status: "Successful",
				message: "Database traida con exito",
				payload: db,
			});
		} catch (error) {
			res.status(404).json({
				status: "not found",
				message: error.message,
				payload: [],
			});
		}
	},
	traerLibroId: async (req, res) => {
		try {
			const { id } = req.params;
			const libro = await LibroService.traerLibroId(id);
			res.status(200).json({
				status: "success",
				message: "Libro traido con exito",
				paypone: libro,
			});
		} catch (error) {
			res.status(404).json({
				status: "not found",
				message: error.message,
				paypone: {},
			});
		}
	},
	agregarLibro: async (req, res) => {
		try {
			const { title, author, isbn, publishedDate, availableCopies } = req.body;
			const libro = await LibroService.agregarLibro(
				title,
				author,
				isbn,
				publishedDate,
				availableCopies,
			);
			res.status(201).json({
				status: "Success",
				message: "Libro creado exitosamente",
				payload: libro,
			});
		} catch (error) {
			res.status(404).json({
				status: "not found",
				message: error.message,
				payload: {},
			});
		}
	},
	actualizarLibro: async (req, res) => {
		try {
			const libro = req.body;
			const { id } = req.params;
			const libroActualizado = await LibroService.actualizarLibro(id, libro);
			res.status(200).json({
				status: "Success",
				message: "El libro se actualizo con exito",
				payload: libroActualizado,
			});
		} catch (error) {
			res.status(404).json({
				status: "not found",
				message: error.message,
				payload: {},
			});
		}
	},
	eliminarLibro: async (req, res) => {
		try {
			const { id } = req.params;
			const libroEliminado = await LibroService.eliminarLibro(id);
			res.status(200).json({
				status: "Success",
				message: "Libro eliminado exitosamente",
				payload: libroEliminado,
			});
		} catch (error) {
			res.status(404).json({
				status: "not found",
				message: error.message,
				payload: {},
			});
		}
	},
};
