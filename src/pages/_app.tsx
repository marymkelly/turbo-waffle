import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PageHead from "@/components/layout/PageHead";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<PageHead />
			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
