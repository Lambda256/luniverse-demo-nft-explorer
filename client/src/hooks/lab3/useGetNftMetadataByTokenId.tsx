import { getNftMetadataByTokenId } from "@/apis";
import { KEYS } from "@/constants";
import { UseQueryResult, useQuery } from "react-query";

interface GetNftMetadataByTokenIdParams {
    contractAddress: string;
    tokenId: string;
    resync?: boolean;
    timeoutSeconds?: number;
}

const useGetNftMetadataByTokenId = ({
    contractAddress,
    tokenId,
    resync,
    timeoutSeconds,
}: GetNftMetadataByTokenIdParams): UseQueryResult<
    ResponseWithoutItems<GetNftMetadataByTokenIdData<Metadata | string | null>>
> => {
    return useQuery({
        queryKey: [
            KEYS.QUERY_NFT_METADATA_BY_TOKEN_ID,
            contractAddress,
            tokenId,
            resync,
            timeoutSeconds,
        ],
        queryFn: () => {
            if (!contractAddress || !tokenId) return;
            return getNftMetadataByTokenId(
                contractAddress,
                tokenId,
                resync,
                timeoutSeconds
            );
        },
        enabled: !!contractAddress || !!tokenId,
    });
};

export default useGetNftMetadataByTokenId;
