import useGetAuthToken from "@/hooks/lab1/useGetAuthToken";
import { Container, TextBody, TextBox, TextTitle } from "./AuthToken.styled";
import AuthTokenForm from "./AuthTokenForm/AuthTokenForm";
import Loading from "@/components/common/Loading/Loading";

const AuthToken = () => {
	const authTokenFromServer = useGetAuthToken();

	return (
		<Container>
			<TextBox>
				<TextTitle>Current Auth Token</TextTitle>
				{authTokenFromServer.isLoading ? (
					<Loading />
				) : (
					<TextBody>{authTokenFromServer.data}</TextBody>
				)}
			</TextBox>
			<AuthTokenForm />
		</Container>
	);
};

export default AuthToken;
