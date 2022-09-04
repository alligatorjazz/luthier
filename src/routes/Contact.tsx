import ContactForm from "../components/ContactForm";
import FlexColumns from "../components/FlexColumns";
import Page from "../Page";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
	return (
		<Page>
			<FlexColumns 
				className={styles.Columns}
				columnStyles={[
					styles.FormColumn,
					styles.TextColumn,
				]}
			>
				<ContactForm />
				<div>
					<h1>Contact Us</h1>
					<p>Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Orci porta non pulvinar neque laoreet. Placerat in egestas erat imperdiet sed euismod nisi. Elementum curabitur vitae nunc sed. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. In egestas erat imperdiet sed euismod nisi porta lorem. Ullamcorper malesuada proin libero nunc consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				</div>
			</FlexColumns>
		</Page>
	);
}