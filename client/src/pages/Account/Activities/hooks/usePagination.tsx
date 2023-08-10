import React, { useState } from "react";

const usePagination = () => {
    const DEFAULT_PAGE_NUM = 1;
    const DEFAULT_RPP = 25;
    const [pageNum, setPageNum] = useState(DEFAULT_PAGE_NUM);
    const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_RPP);

    function handleOnClickPageButton(e: React.MouseEvent) {
        const clickedButton = e.currentTarget.classList;
        if (clickedButton.contains("prev-button")) {
            setPageNum((prev) => prev - 1);
        }
        if (clickedButton.contains("next-button")) {
            setPageNum((prev) => prev + 1);
        }
    }

    function handleOnChangeRowsPerPage(
        e: React.ChangeEvent<HTMLSelectElement>
    ) {
        setRowsPerPage(Number(e.target.value));
        setPageNum(DEFAULT_PAGE_NUM);
    }

    return {
        pageNum,
        rowsPerPage,
        handleOnClickPageButton,
        handleOnChangeRowsPerPage,
    };
};

export default usePagination;
