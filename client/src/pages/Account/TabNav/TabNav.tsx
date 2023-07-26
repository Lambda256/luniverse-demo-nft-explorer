import React, { useRef } from "react";
import { TabButton, TabIndicator, TabWrapper } from "./TabNav.styled";
import { useMoveTabIndicator } from "./hooks/useMoveTabIndicator";
import { useNavigate } from "react-router-dom";

interface TabNavParams {
    menus: string[];
}

const TabNav = ({ menus }: TabNavParams) => {
    const indicatorRef = useRef(null);
    const navigate = useNavigate();

    useMoveTabIndicator(indicatorRef, menus);

    const handleOnClickTabBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Navigates to the tab menu
        navigate(`${e.currentTarget.textContent?.toLowerCase()}`);
    };

    return (
        <TabWrapper>
            {menus.map((menu, index) => (
                <TabButton
                    key={menu + index}
                    className={`${menu.toLowerCase()} ${
                        !index ? "active" : ""
                    } tab${index}`}
                    onClick={handleOnClickTabBtn}
                >
                    {menu}
                </TabButton>
            ))}
            <TabIndicator ref={indicatorRef} />
        </TabWrapper>
    );
};

export default TabNav;
