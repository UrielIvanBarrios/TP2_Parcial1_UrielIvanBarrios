import "./env.js";
import express from "express";
import morgan from "morgan";
import { Config } from "./config/config.js";
import { DataRouter } from "./routers/dataRouter.js";
import { libroRouter } from "./routers/libroRouter.js";

const app = express();
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use(express.json());
console.log("DEBUG ENV PORT:", process.env.PORT);
app.use("/api", libroRouter);
app.use("/api", DataRouter);
app.use((req, res) => {
	res.status(404).json({
		error: "Ruta no encontrada",
		path: req.originalUrl,
		method: req.method,
	});
});

app.listen(Config.PORT, () => {
	console.log(
		`The server is running on http://${Config.HOST}:${Config.PORT} 🚀`,
	);
});
