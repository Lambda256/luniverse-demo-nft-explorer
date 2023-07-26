export const fontWeight = {
	light: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
};

export const color = {
	black: "#000",
	white: "#fff",

	dark: "#333",
	lightDark: "#707070",
	light: "#eee",

	primary: "rgb(19, 102, 255)",
	secondary: "#B37A00",

	success: "#3e8e41",
	error: "#ff6b6b",

	bg: "#ddd",
};

export const heights = {
	navbar: "3rem",
};

export const boxShadow = {
	style1:
		"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
	style2: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
};

export const layout = {
	flexBox: (
		direction = "row",
		alignItems = "flex-start",
		justifyContent = "flex-start"
	) => `
		display: flex;
		flex-direction: ${direction};
		align-items: ${alignItems};
		justify-content: ${justifyContent};
	`,

	gridBox: (direction = "row", size: string) => `
		display: grid;
		${
			direction === "row"
				? `grid-template-rows: repeat( auto-fill, ${size} );`
				: `grid-template-columns: repeat( auto-fill, ${size} );`
		}
	`,
};

export const zIndex = {
	navbar: 1000,
};
