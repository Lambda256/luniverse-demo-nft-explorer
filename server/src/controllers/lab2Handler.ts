import { NextFunction, Request, Response } from "express";
import { listAccountBalance } from "../apis";

export async function handleListAccountBalance(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { address } = req.params;
        const { type, page, rpp, contract } = req.query as {
            type?: string;
            page?: string;
            rpp?: string;
            contract?: string;
        };

        const response = await listAccountBalance(
            address,
            type,
            page ? Number(page) : undefined,
            rpp ? Number(rpp) : undefined,
            contract
        );

        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}
