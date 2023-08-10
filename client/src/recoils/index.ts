import { atom } from "recoil";
import { KEYS } from "@/constants";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
	key: "sessionStorage",
	storage: sessionStorage,
});

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

// Auth token
export const generatedAuthToken = atom({
	key: KEYS.RECOIL_GENERATED_AUTH_TOKEN,
	default: "",
});

export const apiKeyInfo = atom({
	key: KEYS.RECOIL_API_KEY_INFO,
	default: { nodeId: "", apiKeyId: "", apiKeySecret: "" } as ApiKeyInfo,
	effects_UNSTABLE: [persistAtom],
});
