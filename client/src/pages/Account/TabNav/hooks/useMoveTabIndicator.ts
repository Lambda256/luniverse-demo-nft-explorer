import { MutableRefObject, useCallback, useEffect } from "react";

export const useMoveTabIndicator = (
    indicatorRef: MutableRefObject<HTMLDivElement | null>,
    tabMenus: string[]
) => {
    const setActiveElement = (el: HTMLButtonElement) => {
        // Activate when clicking the tab button
        const siblings = el.parentElement?.children;
        if (!siblings) return;
        for (let i = 0; i < siblings.length; i++) {
            const element = siblings[i];
            element.classList.remove("active");
        }
        el.classList.add("active");
    };

    const moveTabIndicator = useCallback(() => {
        // Move the tab indicator to the bottom of the active element
        const activeElement = document.querySelector(".active") as HTMLElement;
        if (!indicatorRef.current || !activeElement) return;

        const activeLeft = activeElement.offsetLeft;

        const activeRect = activeElement.getBoundingClientRect(); // get rect of active element

        indicatorRef.current.style.left = `${activeLeft}px`; // apply the corrected value
        indicatorRef.current.style.width = `${activeRect.width}px`;
    }, [indicatorRef]);

    useEffect(() => {
        const menus = tabMenus.map((menu) => menu.toLowerCase());
        // Move the tab indicator depends on the url path
        const path = location.pathname.split("/").slice(-1)[0];
        if (menus.includes(path)) {
            const activeElement: HTMLButtonElement | null =
                document.querySelector("." + path);
            if (!activeElement) return;
            setActiveElement(activeElement);
            moveTabIndicator();
        }
    }, [moveTabIndicator, tabMenus, location.pathname]);
};
