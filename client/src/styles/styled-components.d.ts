import "styled-components";
import * as theme from "./theme";

declare module "styled-components" {
	export interface DefaultTheme {
		boxShadow: typeof theme.boxShadow;
		color: typeof theme.color;
		fontWeight: typeof theme.fontWeight;
		heights: typeof theme.heights;
		layout: typeof theme.layout;
		zIndex: typeof theme.zIndex;
	}
}
