import styles from "../styles/Footer.module.scss";

export default function Footer() {
	const currentYear = new Date(Date.now()).getFullYear();
	return (
		<footer className={styles.Footer}>
			© Falchion Studios {currentYear}
		</footer>
	);
}