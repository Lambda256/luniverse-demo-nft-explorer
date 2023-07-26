import Button from "@/components/common/Button/Button";
import ConnectButton from "./ConnectButton/ConnectButton";
import { ButtonBox, EmptyBox, HeaderBox } from "./Header.styled";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const handleOnClick = () => {
		navigate("/auth-token");
	};

	return (
		<>
			<HeaderBox>
				<Logo />
				<SearchBar />
				<ButtonBox>
					<Button onClick={handleOnClick}>AuthToken</Button>
					<ConnectButton />
				</ButtonBox>
			</HeaderBox>

			{/* EmptyBox to prevent overlapping */}
			<EmptyBox />
		</>
	);
};

export default Header;
