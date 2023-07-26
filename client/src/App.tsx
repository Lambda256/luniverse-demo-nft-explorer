import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Header from "./components/layout/Header";
import { styled } from "styled-components";
import Footer from "./components/layout/Footer";
import Asset from "./pages/Asset/Asset";

function App() {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="account/:address/*" element={<Account />} />
						<Route path="asset/:contractAddress/:tokenId" element={<Asset />} />
					</Route>
				</Routes>
			</Main>
			<Footer />
		</>
	);
}

export const Main = styled.main`
	width: 100vw;
	min-height: calc(100vh - 1rem - ${({ theme }) => theme.heights.navbar});
`;

export default App;
