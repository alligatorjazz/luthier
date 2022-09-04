import styles from "../styles/Hero.module.scss";
import FlexSection from "./FlexSection";

export default function Hero({ title, subtitle }: { title: string, subtitle?: string }) {

	return (
		<FlexSection className={styles.Container}>
			<h1 className={styles.Title}>
				{title}
			</h1>
			<h3 className={styles.Subtitle}>{subtitle}</h3>
		</FlexSection>
	);
}