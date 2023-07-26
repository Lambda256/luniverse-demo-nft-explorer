import { luniverseApi } from "./instances";

export async function generateAuthToken(
	nodeId: string,
	apiKeyId: string,
	apiKeySecret: string
) {
	return luniverseApi({
		method: "post",
		url: "/auth-token",
		data: {
			nodeId,
			apiKeyId,
			apiKeySecret,
		},
	});
}

export async function getAuthToken() {
	return luniverseApi({
		method: "get",
		url: "/auth-token",
	});
}
