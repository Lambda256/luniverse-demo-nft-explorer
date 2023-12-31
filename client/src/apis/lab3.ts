import { luniverseApi } from "./instances";

export async function listNftByOwner(
	ownerAddress: string,
	rpp?: number,
	cursor?: string,
	disableCount?: boolean
) {
	return luniverseApi({
		method: "post",
		url: "nft/listNftByOwner",
		data: {
			ownerAddress,
			rpp,
			cursor,
			disableCount,
		},
	});
}

export async function getNftMetadataByTokenId(
	contractAddress: string,
	tokenId: string,
	resync?: boolean,
	timeoutSeconds?: number
) {
	return luniverseApi({
		method: "post",
		url: "nft/getNftMetadataByTokenId",
		data: {
			contractAddress,
			tokenId,
			resync,
			timeoutSeconds,
		},
	});
}
