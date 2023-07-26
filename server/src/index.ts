import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import luniverseRouter from "./routes/luniverse";
import errorHandler from "./controllers/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// Luniverse middleware
app.use("/api", luniverseRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
