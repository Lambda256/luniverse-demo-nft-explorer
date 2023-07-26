import { NextFunction, Request, Response } from "express";
import { listNftByOwner, getNftMetadataByTokenId } from "../apis";

export async function handleListNftByOwner(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { ownerAddress, rpp, cursor, disableCount } = req.body as {
            ownerAddress: string;
            rpp?: string;
            cursor?: string;
            disableCount?: string;
        };

        if (!ownerAddress)
            res.status(400).json("Required parameters are not given");

        const response = await listNftByOwner(
            ownerAddress,
            rpp ? Number(rpp) : undefined,
            cursor,
            disableCount ? Boolean(disableCount) : undefined
        );

        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

export async function handleGetNftMetadataByTokenId(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { contractAddress, tokenId, resync, timeoutSeconds } =
            req.body as {
                contractAddress: string;
                tokenId: string;
                resync?: string;
                timeoutSeconds: string;
            };

        if (!contractAddress || !tokenId)
            res.status(400).json("Required parameters are not given");

        const response = await getNftMetadataByTokenId(
            contractAddress,
            tokenId,
            resync ? Boolean(resync) : undefined,
            timeoutSeconds ? Number(timeoutSeconds) : undefined
        );

        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}
