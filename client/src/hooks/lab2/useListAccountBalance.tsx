import { UseQueryResult, useQuery } from "react-query";
import { KEYS } from "@/constants";
import { listAccountBalance } from "@/apis";

interface ListAccountBalanceParams {
    address: string | undefined;
    type?: string;
    page?: number;
    rpp?: number;
    contract?: string;
}

const useListAccountBalance = ({
    address,
    type,
    page,
    rpp,
    contract,
}: ListAccountBalanceParams): UseQueryResult<
    ResponseWithItems<AccountBalanceItem>
> => {
    return useQuery({
        queryKey: [
            KEYS.QUERY_ACCOUNT_BALANCE,
            type,
            address,
            page,
            rpp,
            contract,
        ],
        queryFn: () => {
            if (!address) {
                console.log("Account address is not found");
                return;
            }
            return listAccountBalance(address, type, page, rpp, contract);
        },
        enabled: !!address,
    });
};

export default useListAccountBalance;
