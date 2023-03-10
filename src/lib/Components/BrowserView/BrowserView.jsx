import React, { useState, useEffect } from "react";
import styles from "../styles/skeleton.css";

const BrowserView = (props) => {
	const [deviceType, setDeviceType] = useState("");

	useEffect(() => {
		let hasTouchScreen = false;
		if ("maxTouchPoints" in navigator) {
			hasTouchScreen = navigator.maxTouchPoints > 0;
		} else if ("msMaxTouchPoints" in navigator) {
			hasTouchScreen = navigator.msMaxTouchPoints > 0;
		} else {
			const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
			if (mQ && mQ.media === "(pointer:coarse)") {
				hasTouchScreen = !!mQ.matches;
			} else if ("orientation" in window) {
				hasTouchScreen = true;
			} else {
				var UA = navigator.userAgent;
				hasTouchScreen =
					/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
					/\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
			}
		}
		if (hasTouchScreen) {
			setDeviceType("Mobile");
		} else {
			setDeviceType("Desktop");
		}
	}, []);

	return deviceType === "Desktop" ? (
		<>{props.children}</>
	) : (
		props.skeleton && <div className={`${styles.skeleton}`}>{props.children}</div>
	);
};

export function browserSkeletonLink() {
	return [{ rel: "stylesheet", href: styles }];
}

export default BrowserView;
