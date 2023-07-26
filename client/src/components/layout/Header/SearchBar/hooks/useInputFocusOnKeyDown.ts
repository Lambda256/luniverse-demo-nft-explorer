import { RefObject, useCallback, useEffect } from "react";

const useInputFocusOnKeyDown = (
	inputRef: RefObject<HTMLInputElement>,
	key: string
) => {
	const focusElementOnKeyDown = useCallback(
		(e: KeyboardEvent, El: RefObject<HTMLInputElement>) => {
			if (!El.current) return;
			if (e.key === key && El.current !== document.activeElement) {
				e.preventDefault();
				El.current.focus();
			}
		},
		[key]
	);

	useEffect(() => {
		addEventListener("keydown", (e) => {
			focusElementOnKeyDown(e, inputRef);
		});

		return () => {
			removeEventListener("keydown", (e) => {
				focusElementOnKeyDown(e, inputRef);
			});
		};
	}, [focusElementOnKeyDown, inputRef]);
};

export default useInputFocusOnKeyDown;
