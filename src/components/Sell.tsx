import { Link } from "react-router-dom";
import styles from "../styles/Sell.module.scss";
import FlexSection from "./FlexSection";

export function BookingLink() {
	// TODO: fix this ugly type hack
	return (
		<Link to="/contact">
			<h2 className={styles.BookingLink}>Book a session with us today.</h2>
		</Link>
	);
}
export default function Sell() {
	return (
		<FlexSection className={styles.Container}>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<BookingLink />
		</FlexSection>
	);
}