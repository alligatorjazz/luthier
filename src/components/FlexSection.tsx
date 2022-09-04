import { multiclass } from "../lib";
import styles from "../styles/Section.module.scss";
import { RNode } from "../types";


export default function FlexSection({ children, className }: { children: RNode, className?: string }) {
	return (
		<section className={multiclass(styles.Container, className)}>
			{children}
		</section>
	);
}