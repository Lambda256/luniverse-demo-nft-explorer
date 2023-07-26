import React, { useEffect, useState } from "react";
import {
	ContentBox,
	ItemWrapper,
	IconBox,
	ImgBox,
	MainText,
	SubText,
	TextBox,
	AttributesBox,
	AttributesWrapper,
	AttributesHeader,
	AttributesBody,
	AttributesType,
	AttributesValue,
	EmptyText,
	ContentWrapper,
} from "./Item.styled";
import { FaFileContract } from "react-icons/fa";
import { AiFillTags, AiOutlineNumber } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { VscGroupByRefType } from "react-icons/vsc";
import { useLocation, useParams } from "react-router-dom";

const NOT_FOUND_IMG = "/not-found.png";
const UNKNOWN = "Unknown";

const Item = () => {
	const { contractAddress, tokenId } = useParams();
	const { state } = useLocation();
	const [metadata, setMetadata] = useState(
		{} as GetNftMetadataByTokenIdData<Metadata>
	);

	useEffect(() => {
		if (!state?.metadata) return;
		setMetadata(state.metadata);
	}, [state]);

	return (
		<ItemWrapper>
			<ImgBox
				src={metadata.rawMetadata?.image || NOT_FOUND_IMG}
				onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
					event.currentTarget.src = NOT_FOUND_IMG;
				}}
			/>
			<ContentWrapper>
				<ContentBox>
					<IconBox>
						<AiFillTags />
					</IconBox>
					<TextBox>
						<SubText>Contract Name</SubText>
						<MainText>{metadata.name || UNKNOWN}</MainText>
					</TextBox>
				</ContentBox>
				{/* end of Content Box 1 */}

				<ContentBox>
					<IconBox>
						<FaFileContract />
					</IconBox>
					<TextBox>
						<SubText>Contract Address</SubText>
						<MainText>{contractAddress || UNKNOWN}</MainText>
					</TextBox>
				</ContentBox>
				{/* end of Content Box 2 */}

				<ContentBox>
					<IconBox>
						<AiOutlineNumber />
					</IconBox>
					<TextBox>
						<SubText>Token ID</SubText>
						<MainText>{tokenId || UNKNOWN}</MainText>
					</TextBox>
				</ContentBox>
				{/* end of Content Box 3 */}

				<ContentBox>
					<IconBox>
						<CgProfile />
					</IconBox>
					<TextBox>
						<SubText>Token Owner</SubText>
						<MainText>{state.ownerAddress || UNKNOWN}</MainText>
					</TextBox>
				</ContentBox>
				{/* end of Content Box 4 */}

				<ContentBox>
					<IconBox>
						<VscGroupByRefType />
					</IconBox>
					<TextBox>
						<SubText>NFT Type</SubText>
						<MainText>{metadata.contractType || UNKNOWN}</MainText>
					</TextBox>
				</ContentBox>
				{/* end of Content Box 5 */}
				<AttributesWrapper>
					<AttributesHeader>Attributes</AttributesHeader>
					{!metadata.rawMetadata?.attributes?.length ? (
						<EmptyText>No Attribute found</EmptyText>
					) : (
						<AttributesBody>
							{metadata.rawMetadata?.attributes.map((attribute, index) => (
								<AttributesBox key={attribute.trait_type + index}>
									<AttributesType>{attribute.trait_type}</AttributesType>
									<AttributesValue>{attribute.value}</AttributesValue>
								</AttributesBox>
							))}
						</AttributesBody>
					)}
				</AttributesWrapper>
			</ContentWrapper>
		</ItemWrapper>
	);
};

export default Item;
