import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useParams } from "react-router-dom";
import useGetAccountTransactions from "@/hooks/lab4/useGetAccountTransactions";
import usePagination from "./hooks/usePagination";
import { decodeDataFieldToMethod } from "@/utils";
import Loading from "@/components/common/Loading";
import {
	ButtonBox,
	Column,
	Container,
	EmptyText,
	ErrorText,
	NextButton,
	PageNum,
	Pagination,
	PrevButton,
	Row,
	RowsPerPageSelect,
	TableBox,
} from "./Activities.styled";
const Activities = () => {
	const { address } = useParams();
	const {
		pageNum,
		rowsPerPage,
		handleOnClickPageButton,
		handleOnChangeRowsPerPage,
	} = usePagination();

	const accountTransactions = useGetAccountTransactions({
		address,
		page: pageNum,
		rpp: rowsPerPage,
	});

	const TableHeaders = [
		"#",
		"Tx Hash",
		"Function",
		"Status",
		"From",
		"To",
		"Time",
	];

	if (accountTransactions.isLoading) return <Loading />;
	if (accountTransactions.isError)
		return <ErrorText>Failed to fetch data from the server.</ErrorText>;
	if (!accountTransactions.data)
		return <EmptyText>No Transactions Found</EmptyText>;

	accountTransactions.data.data?.items.sort(
		(previous, next) => Number(next.timestamp) - Number(previous.timestamp)
	);

	return (
		<Container>
			<Pagination>
				<RowsPerPageSelect
					value={rowsPerPage}
					onChange={handleOnChangeRowsPerPage}
				>
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</RowsPerPageSelect>

				<ButtonBox>
					<PrevButton
						className="prev-button"
						onClick={handleOnClickPageButton}
						disabled={accountTransactions.isFetching || pageNum === 1}
					>
						<GrFormPrevious />
					</PrevButton>
					<PageNum>{pageNum}</PageNum>
					<NextButton
						className="next-button"
						onClick={handleOnClickPageButton}
						disabled={accountTransactions.isFetching}
					>
						<GrFormNext />
					</NextButton>
				</ButtonBox>
			</Pagination>

			<TableBox>
				<Column className="header" size={TableHeaders.length}>
					{TableHeaders.map((header) => (
						<Row key={header}>
							<h1>{header}</h1>
						</Row>
					))}
				</Column>
				{accountTransactions.isFetching ? (
					<Loading size={60} />
				) : (
					<>
						{accountTransactions.data?.data?.items.length === 0 ? (
							<EmptyText>No Transaction found</EmptyText>
						) : (
							accountTransactions.data?.data?.items.map((item, index) => (
								<Column key={item.hash + index} size={TableHeaders.length}>
									<Row>{index + 1 + (pageNum - 1) * rowsPerPage}</Row>
									<Row>
										<h2>{item.hash}</h2>
									</Row>
									<Row>
										<h2>{decodeDataFieldToMethod(item.data)}</h2>
									</Row>
									<Row>
										<h2 className={item.status}>{item.status}</h2>
									</Row>
									<Row>
										<h2>{item.from}</h2>
									</Row>
									<Row>
										<h2>{item.to}</h2>
									</Row>
									<Row>
										<h2>{item.timestamp}</h2>
									</Row>
								</Column>
							))
						)}
					</>
				)}
			</TableBox>
		</Container>
	);
};

export default Activities;
