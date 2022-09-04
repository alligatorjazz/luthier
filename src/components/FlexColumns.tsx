import { multiclass } from "../lib";
import styles from "../styles/FlexColumns.module.scss";
import FlexSection from "./FlexSection";

interface FlexColumnsProps {
	children: JSX.Element[];
	className?: string;
	columnStyles?: string[];
}

export default function FlexColumns({ children, className, columnStyles }: FlexColumnsProps) {
	
	const columns = children.map((child, index) => {
		return <div 
			key={index} 
			className={multiclass(
				styles.Column,
				columnStyles ? columnStyles[index] : undefined
			)}
		>
			{child}
		</div>;
	});

	return (
		<FlexSection className={multiclass(styles.Container, className)}>
			{columns}
		</FlexSection>
	);
}