import ConnectButton from "./ConnectButton/ConnectButton";
import { EmptyBox, HeaderBox } from "./Header.styled";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
	return (
		<>
			<HeaderBox>
				<Logo />
				<SearchBar />
				<ConnectButton />
			</HeaderBox>

			{/* EmptyBox to prevent overlapping */}
			<EmptyBox />
		</>
	);
};

export default Header;
