export {};

declare global {
    /* Luniverse API Response */
    interface ResponseWithItems<T> {
        code: string;
        data: DataWithItem<T>;
    }

    interface DataWithItem<T> {
        count?: number | string;
        cursor?: string;
        page?: number;
        rpp?: number;
        items: T[];
    }

    interface ResponseWithoutItems<T> {
        code: string;
        data: T;
    }

    interface AccountBalanceItem {
        asset: Asset;
        amount: string;
        tokens?: Token[];
    }

    interface Asset {
        name: string;
        symbol: string;
        contract?: string;
        decimals?: number;
        type: string;
        nftContractType?: string;
        supply?: string;
        path: string;
    }

    interface Token {
        name: string;
        id: string;
        uri: string;
        owner: string;
        metadata?: Metadata;
    }

    interface Metadata {
        description?: string;
        image?: string;
        name?: string;
        attributes?: Attribute[];
        external_url?: string;
        animation_url?: string;
    }

    interface Attribute {
        trait_type: string;
        value: string;
    }

    interface ListNFTByOwnerItem {
        contractAddress: string;
        tokenId: string;
        ownerAddress: string;
        blockTimestamp: string;
        transactionHash: string;
        balance?: string; // for ERC-1155
    }

    interface GetNftMetadataByTokenIdData<T> {
        name: string;
        symbol: string;
        contractType: string;
        contractDeployedAddress: string;
        deployedTransactionHash: string;
        contractAddress: string;
        tokenUriSyncedAt: string;
        metadataSyncedAt: string | null;
        tokenUri: string;
        rawMetadata: T;
    }
}
