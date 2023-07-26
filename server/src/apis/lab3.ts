/** Lab3
 * API Docs
 * - listNftByOwner: https://developer.luniverse.io/reference/listnftbyowner
 * - getNftMetadataByTokenId: https://developer.luniverse.io/reference/getnftmetadatabytokenid
 */

import { luniverseInstance } from "./instances";

export async function listNftByOwner(
	ownerAddress: string,
	rpp?: number,
	cursor?: string,
	disableCount?: boolean
) {
	return luniverseInstance.request({
		method: "post",
		url: "/nft/listNftByOwner",
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
	return luniverseInstance.request({
		method: "post",
		url: "/nft/getNftMetadataByTokenId",
		data: {
			contractAddress,
			tokenId,
			resync,
			timeoutSeconds,
		},
	});
}
