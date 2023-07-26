import { Router } from "express";
import {
	handleGetNftMetadataByTokenId,
	handleListAccountBalance,
	handleListNftByOwner,
} from "../controllers";

const luniverseRouter = Router();

luniverseRouter.get("/accounts/:address/balance", handleListAccountBalance);
luniverseRouter.post("/nft/listNftByOwner", handleListNftByOwner);
luniverseRouter.post(
	"/nft/getNftMetadataByTokenId",
	handleGetNftMetadataByTokenId
);

export default luniverseRouter;
