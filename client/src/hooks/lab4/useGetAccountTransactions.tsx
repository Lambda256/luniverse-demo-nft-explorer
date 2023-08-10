import { useQuery, UseQueryResult } from "react-query";
import { KEYS } from "@/constants/";
import { getAccountTransactions } from "@/apis";

interface Args {
    address: string | undefined;
    page?: number;
    rpp?: number;
}

interface Transaction {
    path: string;
    hash: string;
    from: string;
    to: string;
    value: string;
    data: string;
    nonce: string;
    gas: string;
    gasPrice: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    status: string;
    timestamp: string;
    block: string;
    receipt: Receipt;
}

interface Receipt {
    from: string;
    to: string;
    gasUsed: string;
    logs: Log[];
    cumulativeGasUsed: string;
    effectiveGasPrice: string;
    transactionIndex: number;
    transactionHash: string;
    status: string;
    logsBloom: string;
}

interface Log {
    blockHash: string;
    logIndex: number;
    address: string;
    data: string;
    removed: boolean;
    topics: string[];
    blockNumber: number;
    transactionIndex: number;
    transactionHash: string;
}

const useGetAccountTransactions = ({
    address,
    page = 1,
    rpp = 10,
}: Args): UseQueryResult<ResponseWithItems<Transaction>> =>
    useQuery({
        queryKey: [KEYS.QUERY_ACCOUNT_TRANSACTIONS, page, rpp, address],
        queryFn: () => {
            if (!address) return;
            return getAccountTransactions(address, page, rpp);
        },
        enabled: !!address,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

export default useGetAccountTransactions;
