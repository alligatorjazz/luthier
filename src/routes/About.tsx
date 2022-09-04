import FlexColumns from "../components/FlexColumns";
import { BookingLink } from "../components/Sell";
import Page from "../Page";
import styles from "../styles/About.module.scss";
export default function About() {
	const imgUrl = "https://qpwhastloyczikvctgso.supabase.co/storage/v1/object/public/longsword/images/muhammadtaha-ibrahim-ma-aji-TBAVqIrjE6A-unsplash.jpg"
	return (
		<Page>
			<FlexColumns 
				className={styles.FlexColumns}
				columnStyles={[
					styles.TextColumn,
					styles.ImageColumn
				]}
			>
				<div>
					<h1>About Us</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus. Semper feugiat nibh sed pulvinar. Erat pellentesque adipiscing commodo elit. Duis ultricies lacus sed turpis tincidunt id aliquet. Diam in arcu cursus euismod quis viverra nibh. Enim sed faucibus turpis in eu.</p>
					<p>Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Orci porta non pulvinar neque laoreet. Placerat in egestas erat imperdiet sed euismod nisi. Elementum curabitur vitae nunc sed. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. In egestas erat imperdiet sed euismod nisi porta lorem. Ullamcorper malesuada proin libero nunc consequat. </p>
				</div>
				<img src={imgUrl} alt="A photographer taking a picture."/>
			</FlexColumns>
			<BookingLink />
		</Page>
	);
}