import { Button } from "./ConnectButton.styled";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { connectedAccountState, searchAccountState } from "@/recoils";
import { useEffect, useState } from "react";
import { Metamask, shortenAddr } from "@/utils";

const CONNECT_TEXT = "Connect";

const ConnectButton = () => {
	const [buttonText, setButtonText] = useState(CONNECT_TEXT);
	const [isConnected, setIsConnected] = useState(false);

	const navigate = useNavigate();
	const setSearchAccount = useSetRecoilState(searchAccountState);
	const [accounts, setAccounts] = useRecoilState(connectedAccountState);

	useEffect(() => {
		if (!Metamask.isInstalled()) return;

		const handleAccountsChanged = (newAccounts: string[]) => {
			setAccounts(newAccounts);
			setSearchAccount(newAccounts[0]);
			setButtonText(shortenAddr(newAccounts[0]));
			if (newAccounts.length > 0) {
				setIsConnected(true);
			} else {
				setIsConnected(false);
			}
		};

		Metamask.getAccounts().then((accounts) => {
			if (accounts.length > 0 && !!accounts[0]) {
				handleAccountsChanged(accounts);
			} else setButtonText(CONNECT_TEXT);
		});

		Metamask.provider.on("accountsChanged", handleAccountsChanged);

		return () => {
			Metamask.provider.removeListener(
				"accountsChanged",
				handleAccountsChanged
			);
		};
	}, [accounts, setAccounts, setSearchAccount]);

	const handleOnClickConnectBtn = async () => {
		if (Metamask.isInstalled()) {
			Metamask.connect().then(setAccounts);
			return;
		}
		if (confirm("Metamask is not installed. Click OK to install Metamask.")) {
			window.open("https://metamask.io/download/", "_blank");
		}
	};

	const handleOnClickAccountBtn = () => {
		setSearchAccount(accounts[0]);
		navigate(`/account/${accounts[0]}`);
	};

	return (
		<Button
			onClick={isConnected ? handleOnClickAccountBtn : handleOnClickConnectBtn}
		>
			{buttonText}
		</Button>
	);
};

export default ConnectButton;
