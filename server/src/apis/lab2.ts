/** Lab2
 * API Docs
 * - listAccountBalance: https://developer.luniverse.io/reference/getaccountbalance
 */

import { luniverseInstance } from "./instances";

export async function listAccountBalance(
    address: string,
    type?: string,
    page?: number,
    rpp?: number,
    contract?: string
) {
    return luniverseInstance.request({
        method: "get",
        url: `/accounts/${address}/balance`,
        params: {
            type,
            page,
            rpp,
            contract,
        },
    });
}
