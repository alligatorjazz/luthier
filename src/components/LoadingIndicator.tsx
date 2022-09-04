import styles from "../styles/LoadingIndicator.module.scss";
interface LoadingIndicatorProps {
	size?: string;
}

export default function LoadingIndicator({ size }: LoadingIndicatorProps) {
	const imgUrl = "https://qpwhastloyczikvctgso.supabase.co/storage/v1/object/public/longsword/images/loading-spinner.gif";
	return (
		<div className={styles.Container} style={{
			width: size,
			height: size
		}}>
			<img src={imgUrl} alt="A loading indicator."/>
		</div>
	)

}