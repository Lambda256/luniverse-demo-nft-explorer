import useListAccountBalance from "@/hooks/lab2/useListAccountBalance";
import { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
    BalanceContainer,
    ContentWrap,
    IconBox,
    NameText,
    TextBox,
    ValueText,
} from "./BalanceBoard.styled";
import Loading from "@/components/common/Loading/Loading";
import { GrMoney } from "react-icons/gr";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { ethers } from "ethers";

const CONTENTS: {
    name: string;
    icon: JSX.Element;
    value: string | JSX.Element;
}[] = [
    { name: "Address", icon: <FaEthereum />, value: ethers.ZeroAddress },
    { name: "ETH Balance", icon: <GrMoney />, value: <Loading /> },
    { name: "NFT Balance", icon: <RiArchiveDrawerLine />, value: <Loading /> },
];

const BalanceBoard = () => {
    const [contents, setContents] = useState(CONTENTS);
    const { address } = useParams();

    const queryEthBalance = useListAccountBalance({
        address,
        type: "native",
    });
    const queryNftBalance = useListAccountBalance({
        address,
        type: "nft",
    });

    useEffect(() => {
        if (!ethers.isAddress(address)) return;
        setContents((prev) =>
            prev.map((content) => {
                if (content.name === "Address")
                    return { ...content, value: address };
                else return content;
            })
        );
    }, [address]);

    /** ETH Balance **/
    useEffect(() => {
        if (queryEthBalance.isLoading) return;
        if (!queryEthBalance.data) {
            setContents((prev) =>
                prev.map((content) => {
                    if (content.name === "ETH Balance")
                        return { ...content, value: "Not Found" };
                    else return content;
                })
            );
            return;
        }

        const ethBalance =
            queryEthBalance.data?.data?.items?.length > 0
                ? ethers.formatEther(
                      queryEthBalance.data.data?.items[0]?.amount
                  )
                : "0";

        if (!ethBalance) {
            console.log("Didn't query ETH balance");
            return;
        }

        setContents((prev) =>
            prev.map((content) => {
                if (content.name === "ETH Balance")
                    return { ...content, value: ethBalance };
                else return content;
            })
        );
    }, [queryEthBalance.isLoading, queryEthBalance.data]);

    /** NFT Balance **/
    useEffect(() => {
        if (queryNftBalance.isLoading) return;
        if (!queryNftBalance.data) {
            setContents((prev) =>
                prev.map((content) => {
                    if (content.name === "NFT Balance")
                        return { ...content, value: "Not Found" };
                    else return content;
                })
            );
            return;
        }
        const nftBalance = queryNftBalance.data?.data?.count
            ? queryNftBalance.data.data.count.toString()
            : "0";

        if (!nftBalance) {
            console.log("Didn't query NFT balance");
            return;
        }

        setContents((prev) =>
            prev.map((content) => {
                if (content.name === "NFT Balance")
                    return { ...content, value: nftBalance };
                else return content;
            })
        );
    }, [queryNftBalance.isLoading, queryNftBalance.data]);

    return (
        <BalanceContainer>
            {contents.map((content, index) => (
                <ContentWrap key={"content.name" + index}>
                    <IconBox>{content.icon}</IconBox>
                    <TextBox>
                        <NameText>{content.name}</NameText>
                        <ValueText>{content.value}</ValueText>
                    </TextBox>
                </ContentWrap>
            ))}
        </BalanceContainer>
    );
};

export default BalanceBoard;
