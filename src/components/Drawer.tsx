import { multiclass } from "../lib";
import styles from "../styles/Drawer.module.scss";

interface DrawerProps {
	direction: "right" | "left" | "top" | "bottom";
	children: JSX.Element[] | JSX.Element;
	active: boolean;
	zIndex: number;
}

const inactiveClasses = {
	right: styles.DrawerRight,
	left: styles.DrawerLeft,
	top: styles.DrawerTop,
	bottom: styles.DrawerBottom
};

const activeClasses = {
	right: styles.DrawerRightActive,
	left: styles.DrawerLeftActive,
	top: styles.DrawerTopActive,
	bottom: styles.DrawerBottomActive
};

export default function Drawer({ children, direction, active, zIndex }: DrawerProps) {

	const classes = active ?
		multiclass(styles.Drawer, activeClasses[direction]) :
		multiclass(styles.Drawer, inactiveClasses[direction]);

	return (
		<div className={classes} style={{zIndex: zIndex}}>
			{children}
		</div>
	);
}