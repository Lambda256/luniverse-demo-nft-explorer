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
		// Complete here!
		method: "",
		url: ``,
		params: {},
	});
}
