import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from "./styles/Page.module.scss";

interface PageProps {
	children: JSX.Element[] | JSX.Element;
	fixedNav?: boolean;
}

export default function Page({ children, fixedNav }: PageProps) {

	return (
		<>
			<Navbar fixedNav={fixedNav} />
			<main className={styles.MainContent} style={{
				paddingTop: fixedNav ? "" : "0"
			}}>
				{children}
			</main>
			<Footer />
		</>
	);
}