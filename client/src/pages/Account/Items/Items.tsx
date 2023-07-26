import { useEffect, useState } from "react";
import ItemCard from "./ItemCard/ItemCard";
import useListNftByOwner from "@/hooks/lab3/useListNftByOwner";
import { useParams } from "react-router-dom";
import { EmptyText, ErrorText, ItemsWrapper } from "./Items.styled";
import Loading from "@/components/common/Loading/Loading";

const Items = () => {
	const [items, setItems] = useState([] as ListNFTByOwnerItem[]);
	const { address } = useParams();

	const queryNftBalance = useListNftByOwner({
		ownerAddress: address,
		rpp: 30,
	});

	useEffect(() => {
		if (queryNftBalance.isLoading) return;
		if (queryNftBalance.isError) return;
		if (!queryNftBalance.data) return;
		const result = queryNftBalance.data?.data?.items;
		if (!result) return;
		setItems(result);
	}, [
		queryNftBalance.isLoading,
		queryNftBalance.data,
		queryNftBalance.isError,
		address,
	]);

	if (queryNftBalance.isLoading) return <Loading />;

	if (queryNftBalance.isError)
		return <ErrorText>Failed to fetch data from the server</ErrorText>;

	if (!items?.length) return <EmptyText>No items found</EmptyText>;

	return (
		<ItemsWrapper>
			{items.map((item, index) => {
				return (
					<ItemCard
						key={index + item.transactionHash}
						contractAddress={item.contractAddress}
						tokenId={item.tokenId}
					/>
				);
			})}
		</ItemsWrapper>
	);
};

export default Items;
