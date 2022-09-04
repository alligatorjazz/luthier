import { GalleryImage } from "@falchion-studios/flint";
import { fetchGallery } from "@falchion-studios/flint/db";
import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguettebox.min.css";
import { useCallback, useEffect, useState } from "preact/hooks";
import { siteBreakpoints } from "../config";
import useBreakpoint from "../hooks/useBreakpoint";
import styles from "../styles/TiledGallery.module.scss";
import LoadingIndicator from "./LoadingIndicator";

export default function TiledGallery() {

	const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
	const [descriptions, setDescriptions] = useState<string[]>([]);
	const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false]);
	const [ready, setReady] = useState<boolean>(false);
	const mobileImageLimit = 6;

	// TODO: add loading indicator before images are ready
	// TODO: cache images for instant reloading when switching to home

	useEffect(() => {
		const loadImages = async () => {
			const remoteGallery = await fetchGallery("home", "longsword");
			if (remoteGallery) {
				const [images, alts] = remoteGallery;
				setGalleryImages(images);
				console.log(alts);
				setDescriptions(alts ? alts.map((alt) => { if (alt) { return alt; } else { return ""; } }) : [])
			}
			setImagesLoaded(() => galleryImages.map(() => false))
		};
		loadImages();
	}, []);

	const desktop = useBreakpoint(siteBreakpoints.md, "above");

	const allImagesLoaded = () => {
		if (desktop) {
			return imagesLoaded.length == galleryImages.length
				&& imagesLoaded.filter((value) => value == true).length == imagesLoaded.length
		} else {
			return imagesLoaded.length == mobileImageLimit
				&& imagesLoaded.filter((value) => value == true).length == mobileImageLimit
		}

	}

	const generateImage = (galleryImage: GalleryImage, index: number) => {
		return (
			<a href={galleryImage.fullURL} key={index}>
				<img src={galleryImage.thumbURL} loading="eager"
					alt={descriptions[index] ? Object.values(descriptions[index])[0] : ""}
					style={{
						visibility: ready ? "" : "hidden"
					}}
					onLoad={() => {
						setImagesLoaded((currentlyLoaded) => {
							const newArray = currentlyLoaded;
							newArray[index] = true;
							return newArray;
						})
						if (allImagesLoaded()) {
							setReady(true)
							baguetteBox.run("." + styles.Container)
						}
					}}
				/>
			</a>
		);
	};

	const gallery: JSX.Element[] = desktop ?
		galleryImages.map(generateImage) :
		galleryImages.slice(0, mobileImageLimit).map(generateImage);

	const loadingWheel = useCallback(() => (
		<>{!ready && <LoadingIndicator size="100px" />}</>
	), [ready]);

	return (

		<>
			<section className={styles.Section} style={{
				// layout shift prevention
				minHeight: allImagesLoaded() ? "" :
					desktop ? "20rem" : "40rem",
			}}
			>
				<ul className={styles.Container}>
					{loadingWheel()}
					{gallery}
				</ul>
			</section>
		</>
	);
}