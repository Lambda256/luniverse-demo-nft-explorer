import { Router } from "express";
import { handleListAccountBalance } from "../controllers";

const luniverseRouter = Router();

luniverseRouter.get("/accounts/:address/balance", handleListAccountBalance);

export default luniverseRouter;
