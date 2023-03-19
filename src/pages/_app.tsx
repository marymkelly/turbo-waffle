import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import PageHead from "@/components/layout/PageHead";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [screenDimensions, setScreenDimensions] = useState<{ height: number; width: number }>({
		height: 0,
		width: 0,
	});

	useEffect(() => {
		function handleResize(e: any) {
			const screen = e.target.visualViewport;
			setScreenDimensions({ width: screen.width, height: screen.height });

			e.target.visualViewport.width < 768 ? setIsMobile(true) : setIsMobile(false);
		}

		handleResize({ target: window });

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<PageHead />
			<Layout {...pageProps}>
				<Component {...pageProps} screenDimensions={screenDimensions} isMobile={isMobile} />
			</Layout>
		</>
	);
}
