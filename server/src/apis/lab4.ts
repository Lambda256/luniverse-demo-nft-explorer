/** Lab3
 * API Docs
 * - listAccountTransactions: https://developer.luniverse.io/reference/getaccounttransactions
 */
import { luniverseInstance } from "./instances";

export async function listAccountTransactions(
	address: string,
	relation?: string,
	status?: string,
	page?: number,
	rpp?: number
) {
	return luniverseInstance.request({
		method: "get",
		url: `/accounts/${address}/transactions`,
		params: {
			relation,
			status,
			page,
			rpp,
		},
	});
}
