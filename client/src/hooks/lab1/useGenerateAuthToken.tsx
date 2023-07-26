import { generateAuthToken } from "@/apis/lab1";
import { KEYS } from "@/constants";
import { useMutation } from "react-query";

const useGenerateAuthToken = () => {
	return useMutation({
		mutationKey: [KEYS.CREATE_AUTH_TOKEN],
		mutationFn: ({ nodeId, apiKeyId, apiKeySecret }: ApiKeyInfo) =>
			generateAuthToken(nodeId, apiKeyId, apiKeySecret),
		onError: () => {
			alert("Error generating Auth Token");
		},
		onSuccess: () => {
			alert("Auth token is generated successfully!");
		},
	});
};

export default useGenerateAuthToken;
