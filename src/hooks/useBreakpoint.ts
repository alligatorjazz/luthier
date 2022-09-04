import { useEffect, useState } from "preact/hooks";

type Threshold = "above" | "below";
function checkBreakpoint(breakpoint: number, referenceWidth: number, threshold: Threshold) {
	return threshold == "above" ?
		referenceWidth > breakpoint :
		referenceWidth < breakpoint;
}

export default function useBreakpoint(breakpoint: number, threshold: Threshold) {
	// forces re-run of setTriggered when window size changes
	const [referenceWidth, setReferenceWidth] = useState(window.innerWidth);

	// returns true if the threshold is broken, false otherwise
	const [triggered, setTriggered] = useState(checkBreakpoint(breakpoint, referenceWidth, threshold));

	const checkReferenceWidth = () => {
		if (window.innerWidth != referenceWidth)
			setReferenceWidth(window.innerWidth)
	};

	useEffect(() => {
		window.addEventListener("resize", checkReferenceWidth);
		const currentStatus = checkBreakpoint(breakpoint, referenceWidth, threshold);
		if (triggered != currentStatus) {
			setTriggered(currentStatus);
		}
		return () => window.removeEventListener("resize", checkReferenceWidth);
	}, [referenceWidth]);

	return triggered;
}