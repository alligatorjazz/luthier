import Hero from "../components/Hero";
import Sell from "../components/Sell";
import TiledGallery from "../components/TiledGallery";
import Page from "../Page";

export default function Home() {
	return (
		<Page>
			<Hero
				title="Central Florida's Premier Photography Studio."
				subtitle="Est. 1996"
			/>
			<TiledGallery />
			<Sell />
		</Page>
	);
}