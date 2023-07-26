import { Router } from "express";
import {
	handleGetNftMetadataByTokenId,
	handleListAccountBalance,
	handleListNftByOwner,
} from "../controllers";
import { handleListAccountTransactions } from "../controllers/lab4Handler";
import {
	handleGenerateAuthToken,
	handleGetAuthToken,
} from "../controllers/lab1Handler";

const luniverseRouter = Router();

luniverseRouter.get("/auth-token", handleGetAuthToken);
luniverseRouter.post("/auth-token", handleGenerateAuthToken);
luniverseRouter.get("/accounts/:address/balance", handleListAccountBalance);
luniverseRouter.post("/nft/listNftByOwner", handleListNftByOwner);
luniverseRouter.post(
	"/nft/getNftMetadataByTokenId",
	handleGetNftMetadataByTokenId
);
luniverseRouter.get(
	"/accounts/:address/transactions",
	handleListAccountTransactions
);

export default luniverseRouter;
