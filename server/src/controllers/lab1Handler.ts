import { NextFunction, Request, Response } from "express";
import { generateAuthToken } from "../apis";
import fs from "fs";

export async function handleGetAuthToken(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const authToken = await readAuthTokenFromDotEnv();
		res.status(200).json(authToken);
	} catch (error) {
		next(error);
	}
}

export async function handleGenerateAuthToken(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { nodeId, apiKeyId, apiKeySecret } = req.body as {
			nodeId?: string;
			apiKeyId?: string;
			apiKeySecret?: string;
		};

		if (!nodeId || !apiKeyId || !apiKeySecret) return;
		const response = await generateAuthToken(nodeId, apiKeyId, apiKeySecret);
		const newAuthToken = response?.access_token;
		writeAuthTokenInDotEnv(newAuthToken);
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

function readAuthTokenFromDotEnv(): Promise<string | null> {
	return new Promise((resolve, reject) => {
		fs.readFile(".env", "utf8", (err, data) => {
			if (err) {
				console.log("Error: reading the file");
				reject(err);
				return;
			}

			const regex = /AUTH_TOKEN=([^\n]*)/;
			const match = data.match(regex);

			if (match && match[1]) {
				resolve(match[1]);
			} else {
				resolve(null);
			}
		});
	});
}

function writeAuthTokenInDotEnv(newToken: string) {
	// Check if .env file exists
	if (!fs.existsSync(".env")) {
		// If it doesn't exist, create it with the AUTH_TOKEN value
		fs.writeFileSync(".env", `AUTH_TOKEN=${newToken}\n`, "utf8");
		return console.log(".env file created and updated successfully");
	}

	fs.readFile(".env", "utf8", (err, data) => {
		if (err) {
			console.log("Error: reading to file");
			return;
		}
		let newContent;

		if (data.includes("AUTH_TOKEN=")) {
			const regex = /AUTH_TOKEN=[^\n]*/;
			newContent = data.replace(regex, `AUTH_TOKEN=${newToken}`);
			console.log(newContent);
		} else {
			newContent = data + `\nAUTH_TOKEN=${newToken}\n`;
		}

		fs.writeFile(".env", newContent, "utf8", (err) => {
			if (err) {
				console.log("Error: writing to file");
				return;
			}
			console.log("New Auth token is applied");
		});
	});
}
