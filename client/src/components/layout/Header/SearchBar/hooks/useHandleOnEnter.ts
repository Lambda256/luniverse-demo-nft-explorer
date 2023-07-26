import { useCallback, useEffect } from "react";

const useHandleOnEnter = (action: VoidFunction) => {
	const handleOnEnter = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Enter") {
				e.preventDefault();
				action();
			}
		},
		[action]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleOnEnter);
		return () => {
			document.removeEventListener("keydown", handleOnEnter);
		};
	}, [handleOnEnter]);

	return;
};

export default useHandleOnEnter;
