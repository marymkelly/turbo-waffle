import FeatureArt from "@/components/FeatureArt";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useRef, useState } from "react";
import { featureData } from "@/lib/ts/data";
import HomeIntro from "@/components/Home";

export default function HomePage(props: ReactElement) {
	let [introAnimationPlayed, setIntroAnimationPlayed] = useState(false);
	let [initSecondIntroComplete, setInitSecondIntroComplete] = useState(false);
	let [secondIntroAnimationPlayed, setSecondIntroAnimationPlayed] = useState(false);
	let [wheelCounter, setWheelCounter] = useState(0);
	let [initScrollTextFaded, setInitScrollTextFaded] = useState(false);
	let [featTextVisible, setFeatTextVisible] = useState(false);
	let timerRef = useRef<any>(null);
	let secondAniRef = useRef<any>({ init: false, played: false });

	const router = useRouter();
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [landingImageFaded, setLandingImageFade] = useState<boolean>(false);

	useEffect(() => {
		function handleResize(e: any) {
			if (e.target.visualViewport.width < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}

			if (router.pathname === "/") {
				e.target.visualViewport.width < 1600
					? setLandingImageFade(true)
					: setLandingImageFade(false);
			}
		}

		handleResize({ target: window });

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	useEffect(() => {
		if (introAnimationPlayed) {
			if (!timerRef.current) {
				timerRef.current = setTimeout(() => {
					if (isMobile) {
						router.push("/gallery");
						return;
					}

					setSecondIntroAnimationPlayed(true);

					secondAniRef.current = {
						...secondAniRef.current,
						played: true,
					};
					timerRef.current = null;

					if (!initSecondIntroComplete) {
						timerRef.current = setTimeout(() => {
							secondAniRef.current = secondAniRef.current = {
								...secondAniRef.current,
								init: true,
							};
							setWheelCounter(150);
							setInitSecondIntroComplete(true);
							timerRef.current = null;
						}, 800);
					}
				}, 1800);
			}
		}
	}, [introAnimationPlayed]);

	useEffect(() => {
		if (secondAniRef.current.init && !secondAniRef.current.played) {
			if (!timerRef.current)
				timerRef.current = setTimeout(() => {
					setFeatTextVisible(false);
					timerRef.current = null;
				}, 1800);
		}
	}, [secondIntroAnimationPlayed]);

	const opacityThresh = {
		featureText: {
			min: 37,
			max: 100,
		},
		descText: {
			min: 50,
			max: 105,
		},
		scrollText: {
			min: 5,
			max: "",
		},
		featImage: {
			min: 80,
			max: 135,
		},
	};

	function scrollHandler(e: WheelEvent) {
		const direction = Math.sign(e.deltaY);
		const featureRowEl = document.getElementById("feature-row");
		const firstAniEl = document.getElementById("first-ani-container");
		const sidebarEl = document.getElementById("sidebar");
		let sidebarWidth = 0;
		let firstAniOpacity = 1;

		if (direction !== 0) {
			setWheelCounter((wheelCounter += direction));
		}

		if (featureRowEl && firstAniEl) {
			firstAniOpacity = parseFloat(window.getComputedStyle(firstAniEl).opacity);

			let featureRowDimensions = featureRowEl.getBoundingClientRect();
			if (sidebarEl) sidebarWidth = sidebarEl.getBoundingClientRect().width;

			if (featureRowDimensions.left < sidebarWidth - 10) {
				setWheelCounter(150);
				return;
			}

			if (wheelCounter < 0) {
				setWheelCounter(0);
			} else if (wheelCounter > 135) {
				setWheelCounter(135);
			}
		}
	}

	useEffect(() => {
		document.addEventListener("wheel", scrollHandler);

		return () => {
			document.removeEventListener("wheel", scrollHandler);
		};
	}, []);

	useEffect(() => {
		const scrollTextEl = document.getElementById("scroll-text");

		if (scrollTextEl && !initScrollTextFaded && wheelCounter > opacityThresh.scrollText.min) {
			setInitScrollTextFaded(true);
			setWheelCounter(0);
		}

		if (initScrollTextFaded) {
			setFeatTextVisible(
				wheelCounter - opacityThresh.featureText.min > opacityThresh.featureText.min
					? true
					: false
			);
			// }
		}
	}, [wheelCounter]);

	useEffect(() => {
		if (featTextVisible) {
			setIntroAnimationPlayed(true);
		} else {
			if (secondIntroAnimationPlayed) {
				setSecondIntroAnimationPlayed(false);
			}
			setIntroAnimationPlayed(false);
		}
	}, [featTextVisible]);

	return (
		<>
			<div
				className={`flex flex-row w-full relative overscroll-auto ${
					introAnimationPlayed ? "overflow-y-hidden overflow-x-auto" : "overflow-hidden"
				}`}>
				{!isMobile ? (
					<div
						id='feature-row'
						className={`flex flex-row transition-all ${
							introAnimationPlayed ||
							(secondIntroAnimationPlayed && secondIntroAnimationPlayed)
								? "animate-delayed-opacity-in animate-sudden-flex-reveal"
								: "animate-delayed-opacity-out animate-sudden-flex-hide"
						}`}>
						{featureData.map((proj, i) => (
							<FeatureArt
								key={`feature-${i}`}
								i={i}
								{...proj}
								animationPlayed={secondIntroAnimationPlayed}
								setAnimationPlayed={secondIntroAnimationPlayed}
							/>
						))}
					</div>
				) : null}
				<div
					id='first-ani-container'
					className={`absolute w-full h-full flex mt-1 transition-all  ${
						introAnimationPlayed ||
						(secondIntroAnimationPlayed && secondIntroAnimationPlayed)
							? "delay-[2000ms] opacity-0"
							: "delay-[2000ms] opacity-100 duration-500"
					}`}>
					<HomeIntro
						isMobile={isMobile}
						fadeLanding={landingImageFaded}
						animationPlayed={introAnimationPlayed}
						setAnimationPlayed={setIntroAnimationPlayed}
						initScrollTextFaded={initScrollTextFaded}
						featTextVisible={featTextVisible}
					/>
				</div>
			</div>
		</>
	);
}
