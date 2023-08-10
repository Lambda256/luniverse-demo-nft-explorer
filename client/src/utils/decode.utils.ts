export const decodeDataFieldToMethod = (data: string) => {
    const first4Bytes = data.slice(2, 10);

    const mappingList = [
        // Eth transfer
        { signature: "", method: "ETH transfer" },

        // ERC20
        { signature: "18160ddd", method: "totalSupply" },
        { signature: "70a08231", method: "balanceOf" },
        { signature: "a9059cbb", method: "transfer" },
        { signature: "23b872dd", method: "transferFrom" },
        { signature: "095ea7b3", method: "approve" },
        { signature: "dd62ed3e", method: "allowance" },

        // ERC721
        { signature: "70a08231", method: "balanceOf" },
        { signature: "6352211e", method: "ownerOf" },
        { signature: "42842e0e", method: "safeTransferFrom" },
        { signature: "f242432a", method: "safeTransferFrom" },
        { signature: "b88d4fde", method: "safeTransferFrom" },
        { signature: "23b872dd", method: "transferFrom" },
        { signature: "095ea7b3", method: "approve" },
        { signature: "a22cb465", method: "setApprovalForAll" },
        { signature: "081812fc", method: "getApproved" },
        { signature: "e985e9c5", method: "isApprovedForAll" },

        // ERC-1155
        { signature: "f242432a", method: "safeTransferFrom" },
        { signature: "2eb2c2d6", method: "safeBatchTransferFrom" },
        { signature: "00fdd58e", method: "balanceOf" },
        { signature: "4e1273f4", method: "balanceOfBatch" },
        { signature: "a22cb465", method: "setApprovalForAll" },
        { signature: "e985e9c5", method: "isApprovedForAll" },
    ];

    const result = mappingList.find((map) => map.signature === first4Bytes);
    return result ? result.method : "unknown";
};
