import { useCallback, useRef } from "react";
import { SearchBox, SearchButton, SearchInput } from "./SearchBar.styled";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { searchAccountState } from "@/recoils";
import { ethers } from "ethers";
import useInputFocusOnKeyDown from "./hooks/useInputFocusOnKeyDown";
import useHandleOnEnter from "./hooks/useHandleOnEnter";

const SearchBar = () => {
	const placeholderText = "Input an account address to search";
	const searchRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const setSearchAccount = useSetRecoilState(searchAccountState);

	const searchAction = useCallback(() => {
		if (!searchRef.current) {
			alert("Search input element is not found");
			return;
		}

		if (!searchRef.current.value) {
			return;
		}

		if (!ethers.isAddress(searchRef.current.value)) {
			alert("Invalid address. Please try again");
			return;
		}

		setSearchAccount(ethers.getAddress(searchRef.current.value));
		navigate(`/account/${ethers.getAddress(searchRef.current.value)}`);
		searchRef.current.value = "";
	}, [navigate, setSearchAccount]);

	useInputFocusOnKeyDown(searchRef, "/");
	useHandleOnEnter(searchAction);

	return (
		<SearchBox>
			<SearchInput placeholder={placeholderText} ref={searchRef} />
			<SearchButton onClick={searchAction} />
		</SearchBox>
	);
};

export default SearchBar;
