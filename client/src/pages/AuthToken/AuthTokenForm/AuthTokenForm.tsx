import { useEffect, useRef } from "react";
import { ButtonBox, FormTitle, FormWrapper } from "./AuthTokenForm.styled";
import InputComponent from "./InputComponent/InputComponent";
import useGenerateAuthToken from "@/hooks/lab1/useGenerateAuthToken";
import useGetAuthToken from "@/hooks/lab1/useGetAuthToken";
import Button from "@/components/common/Button/Button";
import { useRecoilState } from "recoil";
import { apiKeyInfo } from "@/recoils";

const AuthTokenForm = () => {
	const nodeIdRef = useRef<HTMLInputElement>(null);
	const apiKeyIdRef = useRef<HTMLInputElement>(null);
	const apiKeySecretRef = useRef<HTMLInputElement>(null);

	const authTokenMutation = useGenerateAuthToken();

	const [apiKeyInfoInputs, setApiKeyInfoInputs] = useRecoilState(apiKeyInfo);

	function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		const nodeId = nodeIdRef.current?.value;
		const apiKeyId = apiKeyIdRef.current?.value;
		const apiKeySecret = apiKeySecretRef.current?.value;

		if (!nodeId || !apiKeyId || !apiKeySecret) {
			alert("Please fill out all the required fields");
			return;
		}

		setApiKeyInfoInputs({ nodeId, apiKeyId, apiKeySecret });

		authTokenMutation.mutate({ nodeId, apiKeyId, apiKeySecret });
	}

	const authTokenFromServer = useGetAuthToken();

	useEffect(() => {
		authTokenFromServer.refetch();
	}, [authTokenMutation.isLoading]);

	return (
		<FormWrapper>
			<FormTitle>Auth Token Generator</FormTitle>
			<InputComponent
				id="NodeId"
				label="Node ID"
				refValue={nodeIdRef}
				required={true}
				defaultValue={apiKeyInfoInputs.nodeId}
			/>
			<InputComponent
				id="ApiKeyId"
				label="API Key ID"
				refValue={apiKeyIdRef}
				required={true}
				defaultValue={apiKeyInfoInputs.apiKeyId}
			/>
			<InputComponent
				id="ApiKeySecret"
				label="API Key Secret"
				refValue={apiKeySecretRef}
				required={true}
				defaultValue={apiKeyInfoInputs.apiKeySecret}
			/>
			<ButtonBox>
				<Button onClick={handleOnClick} variant="outline">
					Submit
				</Button>
			</ButtonBox>
		</FormWrapper>
	);
};

export default AuthTokenForm;
