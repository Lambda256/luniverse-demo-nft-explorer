import { luniverseApi } from "./instances";

export const getAccountTransactions = async (
    accountAddress: string,
    page = 1,
    rpp = 10
) =>
    luniverseApi({
        method: "get",
        url: `/accounts/${accountAddress}/transactions`,
        params: {
            page,
            rpp,
        },
    });
