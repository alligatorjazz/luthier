import { NavPage } from "./types";

export const siteBreakpoints = {
	xs: 576,
	sm: 768,
	md: 992,
	lg: 1200,
	xl: 1400
};

export const companyTitle = "Longsword Photography";

export const globalNavPages: NavPage[] = [
	{
		route: "/",
		displayName: "Home"
	},
	{
		route: "/about",
		displayName: "About"
	},
	{
		route: "/contact",
		displayName: "Contact"
	}
];