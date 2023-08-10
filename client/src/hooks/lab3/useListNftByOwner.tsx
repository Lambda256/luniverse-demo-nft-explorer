import { UseQueryResult, useQuery } from "react-query";
import { KEYS } from "@/constants";
import { listNftByOwner } from "@/apis";

interface ListNftByOwnerParams {
	ownerAddress: string | undefined;
	rpp?: number;
	cursor?: string;
	disableCount?: boolean;
}

const useListNftByOwner = ({
	ownerAddress,
	rpp,
	cursor,
	disableCount,
}: ListNftByOwnerParams): UseQueryResult<
	ResponseWithItems<ListNFTByOwnerItem>
> => {
	return useQuery({
		queryKey: [
			KEYS.QUERY_NFT_BY_OWNER,
			ownerAddress,
			rpp,
			cursor,
			disableCount,
		],
		queryFn: () => {
			if (!ownerAddress) {
				console.log("Owner address is not found");
				return;
			}
			return listNftByOwner(ownerAddress, rpp, cursor, disableCount);
		},
	});
};

export default useListNftByOwner;
