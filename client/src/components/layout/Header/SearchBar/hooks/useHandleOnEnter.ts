import { RefObject, useCallback, useEffect } from "react";

const useHandleOnEnter = (
	action: VoidFunction,
	El: RefObject<HTMLInputElement>
) => {
	const handleOnEnter = useCallback(
		(e: KeyboardEvent) => {
			const isFocused = El.current == document.activeElement;

			if (e.key === "Enter" && isFocused) {
				e.preventDefault();
				action();
			}
		},
		[El, action]
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
