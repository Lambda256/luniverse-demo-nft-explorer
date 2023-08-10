import { luniverseInstance } from "./instances";

export async function generateAuthToken(
	nodeId: string,
	apiKeyId: string,
	apiKeySecret: string
): Promise<any> {
	return luniverseInstance.request({
		// Complete here!
		method: "",
		baseURL: "",
		url: "",
		headers: {},
	});
}
