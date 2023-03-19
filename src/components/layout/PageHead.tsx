import Head from "next/head";

export default function HeadSection() {
	return (
		<Head>
			<title>Taylor Hamill Art Porfolio</title>
			<meta name='description' content="Website showcasing Artwork by Taylor Hamill's" />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' type='image/svg+xml' href='/images/favicon.svg' />
			<link rel='icon' type='image/png' href='/images/favicon.png' />
		</Head>
	);
}
