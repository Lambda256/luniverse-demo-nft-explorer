import { NextFunction, Request, Response } from "express";
import { listAccountTransactions } from "../apis";

export async function handleListAccountTransactions(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { address } = req.params;
        const { relation, status, page, rpp } = req.query as {
            relation?: string;
            status?: string;
            page?: string;
            rpp?: string;
        };

        const response = await listAccountTransactions(
            address,
            relation,
            status,
            page ? Number(page) : undefined,
            rpp ? Number(rpp) : undefined
        );

        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}
