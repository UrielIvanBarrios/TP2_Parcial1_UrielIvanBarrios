import { Router } from "express";
import { LibroController } from "../controllers/libroController.js";

const libroRouter = Router();

libroRouter.get("/json_file", LibroController.traerLibros);

libroRouter.get("/book/:id", LibroController.traerLibroId);

libroRouter.post("/book", LibroController.agregarLibro);

libroRouter.put("/book/:id", LibroController.actualizarLibro);

libroRouter.delete("/book/:id", LibroController.eliminarLibro);

export { libroRouter };
