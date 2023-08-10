import React, { useEffect, useState } from "react";
import { H4, ImgBox, CardWrapper, ItemImg, TextBox } from "./ItemCard.styled";
import { useNavigate, useParams } from "react-router-dom";
import useGetNftMetadataByTokenId from "@/hooks/lab3/useGetNftMetadataByTokenId";
import Loading from "@/components/common/Loading/Loading";

const NOT_FOUND_IMG = "/not-found.png";

interface ItemCardParams {
	contractAddress: string;
	tokenId: string;
}

const ItemCard: React.FC<ItemCardParams> = ({ contractAddress, tokenId }) => {
	const navigate = useNavigate();
	const { address } = useParams();
	const [metadata, setMetadata] = useState(
		{} as GetNftMetadataByTokenIdData<Metadata | string | null>
	);

	const queryNftMetadata = useGetNftMetadataByTokenId({
		contractAddress,
		tokenId,
	});

	useEffect(() => {
		if (queryNftMetadata.isLoading) return;
		if (!queryNftMetadata.data) return;
		const nftMetadata = queryNftMetadata.data?.data;
		if (!nftMetadata) return;
		if (
			nftMetadata?.rawMetadata &&
			typeof nftMetadata.rawMetadata === "string"
		) {
			try {
				nftMetadata.rawMetadata = JSON.parse(
					nftMetadata.rawMetadata
				) as Metadata;
			} catch (err) {
				nftMetadata.rawMetadata = {} as Metadata;
			}
		}
		setMetadata(nftMetadata);
	}, [queryNftMetadata.data, queryNftMetadata.isLoading]);

	useEffect(() => {
		if (typeof metadata.rawMetadata !== "object") return;
		if (!metadata.rawMetadata?.image) return;
		if (metadata.rawMetadata.image?.startsWith("ipfs://")) {
			const newMetadata = { ...metadata };
			if (typeof newMetadata.rawMetadata !== "object") return;
			if (!newMetadata.rawMetadata?.image) return;

			newMetadata.rawMetadata.image = newMetadata.rawMetadata.image.replace(
				"ipfs://",
				"https://ipfs.io/ipfs/"
			);
			setMetadata(newMetadata);
		}
	}, [metadata, metadata.rawMetadata]);

	if (queryNftMetadata.isLoading)
		return (
			<CardWrapper>
				<Loading />
			</CardWrapper>
		);

	function handleOnClickItemCard() {
		navigate(`/asset/${contractAddress}/${tokenId}`, {
			state: { metadata, ownerAddress: address },
		});
	}

	if (queryNftMetadata.isError) {
		return (
			<CardWrapper onClick={handleOnClickItemCard}>
				<ImgBox>
					<ItemImg
						src={NOT_FOUND_IMG}
						onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
							event.currentTarget.src = NOT_FOUND_IMG;
						}}
					/>
				</ImgBox>
				<TextBox>
					<H4>unknown</H4>
					<H4>#{tokenId}</H4>
				</TextBox>
			</CardWrapper>
		);
	}
	return (
		<CardWrapper onClick={handleOnClickItemCard}>
			<ImgBox>
				<ItemImg
					src={
						typeof metadata.rawMetadata === "object" &&
						metadata.rawMetadata?.image
							? metadata.rawMetadata?.image
							: NOT_FOUND_IMG
					}
					onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
						event.currentTarget.src = NOT_FOUND_IMG;
					}}
				/>
			</ImgBox>
			<TextBox>
				<H4>{metadata.name}</H4>
				<H4>#{tokenId}</H4>
			</TextBox>
		</CardWrapper>
	);
};

export default ItemCard;
