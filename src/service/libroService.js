import { randomUUID } from "node:crypto";
import { Libro } from "../model/libro.js";
import { JsonRepository } from "../repository/jsonRepository.js";

const LibroRepository = new JsonRepository("../db/books.json");

export const LibroService = {
	traerLibros: async () => {
		return await LibroRepository.getAll();
	},
	traerLibroId: async (id) => {
		if (!id) throw new Error("Id no valido");
		return await LibroRepository.getById(id);
	},
	agregarLibro: async (title, author, isbn, publishedDate, availableCopies) => {
		if (!title || !author || !isbn || !publishedDate || !availableCopies)
			throw new Error("formato de libro incompleto");
		const id = randomUUID();
		const libro = new Libro(
			id,
			title,
			author,
			isbn,
			publishedDate,
			availableCopies,
		);
		const libros = await LibroService.traerLibros();
		const libroExistente = libros.find((li) => {
			return li.title === libro.title && li.author === libro.author;
		});
		if (libroExistente) throw new Error("El libro ya se encuentra cargado");
		return await LibroRepository.createOne(libro);
	},
	actualizarLibro: async (id, libroUpdate) => {
		if (!id) throw new Error("Id no valido");
		const libroExistente = await LibroService.traerLibroId(id);
		const libroAActualizar = { ...libroUpdate, id: id };
		return await LibroRepository.updateElement(id, {
			...libroExistente,
			...libroAActualizar,
		});
	},
	eliminarLibro: async (id) => {
		if (!id) throw new Error("Id invalido");
		return await LibroRepository.deleteElement(id);
	},
};
