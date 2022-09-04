import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useCallback, useEffect, useState } from "preact/hooks";
import { Link, useLocation } from "react-router-dom";
import { companyTitle, globalNavPages, siteBreakpoints } from "../config";
import useBreakpoint from "../hooks/useBreakpoint";
import { getRGBA, multiclass, toRGBA } from "../lib";
import styles from "../styles/Navbar.module.scss";
import { NavPage } from "../types";
import Drawer from "./Drawer";
import Shade from "./Shade";

interface NavbarProps {
	zIndex?: number;
	scrollColor?: string;
	fixedNav?: boolean
}

export default function Navbar({ zIndex, scrollColor, fixedNav }: NavbarProps) {
	const defaultZIndex = 5;
	const desktop = useBreakpoint(siteBreakpoints.sm, "above");
	const [drawerActive, setDrawer] = useState(false);
	const [bgColor, setBgColor] = useState(scrollColor ?? "");
	const [bdFilter, setBdFilter] = useState("none")

	useEffect(() => {
		if (scrollColor) { setBgColor("rgba(0, 0, 0, 0)") }
	}, []);

	useScrollPosition(({ currPos }) => {
		if (scrollColor) {
			const currentColor = getRGBA(scrollColor);
			if (!currentColor) {
				throw new Error(`Navbar: scrollColor ${scrollColor} is not a valid rgba value.`)
			} else {
				const newColor = currentColor;
				const maxHeight = document.body.scrollHeight;
				const scrollPercent = -currPos.y / maxHeight
				newColor.a = scrollPercent;
				setBgColor(toRGBA(newColor));
				setBdFilter(`blur: ${scrollPercent * 2}px`)
			}
		}
	});

	// ensures drawer resets to close if window width exceeds desktop breakpoint
	if (drawerActive && desktop) {
		setDrawer(false);
	}

	const mobileNavBars = useCallback(() => (
		<>
			{!desktop && <div
				className={drawerActive ?
					multiclass(styles.MobileNavButton, styles.ActiveNavButton) :
					styles.MobileNavButton
				}
				onClick={() => setDrawer(!drawerActive)}>
				<FontAwesomeIcon icon={faBars} size={"lg"} />
			</div>}
		</>
	), [desktop])
	
	const desktopNavButtons = useCallback(() => (
		<>{desktop && <NavButtons navPages={globalNavPages} mobile={false} />}</>
	), [desktop])

	return (
		<>
			<Drawer direction="right" active={drawerActive} zIndex={(zIndex ?? defaultZIndex) - 1}>
				<NavButtons navPages={globalNavPages} mobile={true} />
			</Drawer>
			<Shade
				zIndex={(zIndex ?? defaultZIndex) - 2}
				onClick={() => setDrawer(false)}
				active={drawerActive}
				smooth={true}
			/>
			<header className={styles.Navbar} style={{
				zIndex: zIndex ?? defaultZIndex,
				backgroundColor: bgColor,
				backdropFilter: bdFilter,
				position: fixedNav ? "fixed" : "initial"
			}}>
				<NavLogo logoText={companyTitle} />
				<div className={styles.HeaderButtons}>
					{desktopNavButtons()}
					<div className={styles.SocialIcons}>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://twitter.com/home"
							aria-label="Twitter"
						>
							<FontAwesomeIcon icon={faTwitter} size={"lg"} />
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/"
							aria-label="Instagram"
						>
							<FontAwesomeIcon icon={faInstagram} size={"lg"} />
						</a>
					</div>
					{mobileNavBars()}
				</div>
			</header>
		</>
	);
}

type NavLogoProps = {
	logoText: string;
	logoURL?: string;
	showText?: boolean;
}

function NavLogo({ logoText, logoURL, showText }: NavLogoProps) {
	// allows user to specifiy a text logo, an image logo, or an image logo with text

	// image logo with text
	if (showText && logoURL) {
		return (
			<>
				<div className="nav-logo">
					<img src={logoURL} />
				</div>
				<div className="nav-title">
					{logoText}
				</div>
			</>
		);
	}

	// image logo
	if (logoURL) {
		return (
			<>
				<div className="nav-logo"><img src={logoURL} alt={logoText} /></div>
			</>
		);
	}

	// text logo
	return (
		<>
			<div className="nav-title">{logoText}</div>
		</>
	);

}

function NavButtons({ navPages, mobile }: { navPages: NavPage[], mobile: boolean }) {

	const currentRoute = useLocation();
	const buttons = navPages.map((page, index) => {
		if (page.route == currentRoute.pathname) {
			return <Link to={page.route} key={index} className={styles.CurrentPage}>{page.displayName}</Link>;
		}
		return <Link to={page.route} key={index}>{page.displayName}</Link>;
	});

	return (
		<nav className={mobile ? multiclass(styles.SiteNav, styles.SiteNavMobile) : styles.SiteNav}>
			{buttons}
		</nav>
	);
}