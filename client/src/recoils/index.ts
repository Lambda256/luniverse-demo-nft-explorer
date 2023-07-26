import { atom } from "recoil";
import { KEYS } from "@/constants";

// account to search owned NFT list
export const searchAccountState = atom({
	key: KEYS.RECOIL_SEARCH_ACCOUNT,
	default: "",
});

// connected account by Metamask
export const connectedAccountState = atom({
	key: KEYS.RECOIL_CONNECTED_ACCOUNT,
	default: [] as string[],
});
