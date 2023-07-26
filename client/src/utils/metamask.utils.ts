interface Ethereum {
	isMetaMask: boolean;
	isConnected: () => boolean;
	request: (request: { method: string; params?: any[] }) => Promise<any>;
	on: (eventName: string, callback: (args: any) => void) => void;
	removeListener: (eventName: string, callback: (args: any) => void) => void;
}

declare global {
	interface Window {
		ethereum: Ethereum;
	}
}

export class Metamask {
	static provider = window.ethereum;

	static isInstalled = (): boolean => {
		return !!this.provider && !!this.provider.isMetaMask;
	};

	static isConnected = async (): Promise<boolean> => {
		if (!this.isInstalled()) return false;
		return this.getAccounts().then((accounts) => !!accounts.length);
	};

	static getAccounts = async (): Promise<string[]> => {
		try {
			const accounts: string[] = await this.provider.request({
				method: "eth_accounts",
			});
			return accounts;
		} catch (error) {
			throw Error();
		}
	};

	static connect = async (): Promise<string[]> => {
		try {
			const accounts: string[] = await this.provider.request({
				method: "eth_requestAccounts",
			});
			return accounts;
		} catch (error) {
			throw Error();
		}
	};
}
