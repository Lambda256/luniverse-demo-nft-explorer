nodeId='<--Input your node ID-->' 
keyId='<--Input your API key ID-->'
keySecret='<--Input your API key secret-->'

curl --request POST \
     --url https://web3.luniverse.io/v1/auth-token \
     --header 'accept: application/json' \
     --header "X-NODE-ID: $nodeId" \
     --header "X-Key-ID: $keyId" \
     --header "X-Key-Secret: $keySecret"