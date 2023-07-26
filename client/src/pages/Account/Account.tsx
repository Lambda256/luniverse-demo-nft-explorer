import { Route, Routes } from "react-router-dom";
import BalanceBoard from "./BalanceBoard/BalanceBoard";
import TabNav from "./TabNav/TabNav";
import { AccountContainer, MainContentWrapper } from "./Account.styled";
import Items from "./Items/Items";
import Activities from "./Activities/Activities";

const Account = () => {
    const TAB_MENUS = ["Items", "Activities"];

    return (
        <AccountContainer>
            {/* BalanceBoard */}
            <BalanceBoard />

            {/* Tab Nav bar */}
            <TabNav menus={TAB_MENUS} />

            {/* Main Content */}
            <MainContentWrapper>
                <Routes>
                    <Route index element={<Items />} />
                    <Route path="items" element={<Items />} />
                    <Route path="activities" element={<Activities />} />
                </Routes>
            </MainContentWrapper>
        </AccountContainer>
    );
};

export default Account;
