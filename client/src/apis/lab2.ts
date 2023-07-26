import { luniverseApi } from "./instances";

export async function listAccountBalance(
    accountAddress: string,
    type?: string,
    page?: number,
    rpp?: number,
    contract?: string
) {
    return luniverseApi({
        method: "get",
        url: `accounts/${accountAddress}/balance`,
        params: {
            page,
            rpp,
            type,
            contract,
        },
    });
}
