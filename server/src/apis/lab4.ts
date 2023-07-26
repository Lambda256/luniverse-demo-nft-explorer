import { luniverseInstance } from "./instances";

export async function listAccountTransactions(
	address: string,
	relation?: string,
	status?: string,
	page?: number,
	rpp?: number
) {
	return luniverseInstance.request({
		method: "",
		url: ``,
		params: {},
	});
}
