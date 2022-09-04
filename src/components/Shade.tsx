import { multiclass } from "../lib";
import styles from "../styles/Shade.module.scss";
import { DynamicStyles } from "../types";

interface ShadeProps {
	zIndex: number,
	active: boolean,
	smooth?: boolean;
	onClick?: () => void
}

export default function Shade({ zIndex, active, onClick, smooth }: ShadeProps) {

	const dynamicStyles: DynamicStyles = {};
	dynamicStyles["zIndex"] = active ? zIndex : "-100";
	if (smooth) { dynamicStyles["transition"] = "background-color 1s ease, backdrop-filter 1s ease"; }

	return (
		<div
			className={active ? multiclass(styles.Shade, styles.ShadeActive) : styles.Shade}
			style={dynamicStyles}
			onClick={onClick}
		></div>
	);
}