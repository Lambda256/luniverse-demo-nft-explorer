import axios from "axios";

const luniverseApi = axios.create({
	baseURL: "http://localhost:3000/api",
});

luniverseApi.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		console.error("API call error: ", error);
		return Promise.reject(error);
	}
);

export { luniverseApi };
