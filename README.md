# luniverse-demo-nft-explorer
## Lab1. Generating Auth Token
You can generate an auth token with running a script file, `generate_auth_token.sh`.
This shell script is using [Multichain Auth API](https://developer.luniverse.io/reference/multichain-auth).

Run the shell script to generate a new auth token.
```sh
$ sh generate_auth_token.sh
```

### Response (Success)
Copy and use the value of `access_token`.
```json
{
  "access_token": "eyJhbG...",
  "expires_in": 604800,
  "refresh_expires_in": 864000,
  "refresh_token": "eyJhbG...",
  "token_type": "Bearer",
  "not-before-policy": 0,
  "session_state": "da7c9...",
  "scope": "profile"
}
```

### Response (Failed)
```json
{
  "code": "AUTHENTICATION_FAILED",
  "message": "Authentication failed."
}
```