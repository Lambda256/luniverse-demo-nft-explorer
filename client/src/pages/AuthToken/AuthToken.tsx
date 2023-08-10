import useGetAuthToken from "@/hooks/lab1/useGetAuthToken";
import {
	Container,
	ErrorText,
	TextBody,
	TextBox,
	TextTitle,
} from "./AuthToken.styled";
import AuthTokenForm from "./AuthTokenForm/AuthTokenForm";
import Loading from "@/components/common/Loading/Loading";

const AuthToken = () => {
	const authTokenFromServer = useGetAuthToken();

	return (
		<Container>
			<TextBox>
				<TextTitle>Current Auth Token</TextTitle>
				{authTokenFromServer.isLoading && <Loading />}
				{!authTokenFromServer.isLoading && !authTokenFromServer.isError && (
					<TextBody>{authTokenFromServer.data}</TextBody>
				)}
				{!authTokenFromServer.isLoading && authTokenFromServer.isError && (
					<TextBody>
						<ErrorText>Auth Token Not found</ErrorText>
					</TextBody>
				)}
			</TextBox>
			<AuthTokenForm />
		</Container>
	);
};

export default AuthToken;
