import { luniverseInstance } from "./instances";

export async function generateAuthToken(
	nodeId: string,
	apiKeyId: string,
	apiKeySecret: string
): Promise<any> {
	return luniverseInstance.request({
		method: "post",
		baseURL: "https://web3.luniverse.io/v1/",
		url: "/auth-token",
		headers: {
			"X-NODE-ID": nodeId,
			"X-Key-ID": apiKeyId,
			"X-Key-Secret": apiKeySecret,
		},
	});
}
