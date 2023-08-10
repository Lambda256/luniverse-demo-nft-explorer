import { getAuthToken } from "@/apis/lab1";
import { KEYS } from "@/constants";
import { UseQueryResult, useQuery } from "react-query";

const useGetAuthToken = (): UseQueryResult<string> => {
	return useQuery({
		queryKey: [KEYS.GET_AUTH_TOKEN],
		queryFn: () => getAuthToken(),
	});
};

export default useGetAuthToken;
