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
		// Complete here!
		method: "",
		url: ``,
		params: {},
	});
}
