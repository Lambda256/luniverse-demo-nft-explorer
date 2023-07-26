import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const PROTOCOL = "ethereum";
const NETWORK = "sepolia";

const AUTH_TOKEN = process.env.AUTH_TOKEN || "";

const luniverseInstance = axios.create({
    baseURL: `https://web3.luniverse.io/v1/${PROTOCOL}/${NETWORK}`,
    headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
    },
});

luniverseInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { luniverseInstance };
