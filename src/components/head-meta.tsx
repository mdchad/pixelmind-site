import { SEO } from '@root/typings';
import Head from 'next/head';
import React from 'react'

function HeadMeta({ title= "", description= "", keywords= "", image= "" }: SEO) {
	const defaultTitle = "Pixelmind Studio | Building Bridges Between Business and Technology";
	const defaultDescription = "At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow.";
	const defaultKey = "custom technology solutions, web design, software development, digital marketing, business growth, technology consulting, innovation, digital transformation, project management, user experience";
	const ogUrl = "/api/og-image";
	let ogImage = "/og2.png";

	// if (!image) {
	// 	const url = typeof window !== 'undefined' ? window.location.origin : '';
	// 	ogImage = url + ogUrl;
	// }

	return (
		<Head>
			<title>{title ?? defaultTitle}</title>
			<meta name="description" content={description ?? defaultDescription} />
			<meta name="keywords" content={keywords ?? defaultKey} />

			{/*<meta property="og:url" content={`https://subscription-starter.vercel.app${router.asPath}`} />*/}
			{/*<meta property="og:type" content="website" />*/}
			{/*<meta property="og:site_name" content={meta.title} />*/}
			{/*<meta property="og:description" content={meta.description} />*/}
			{/*<meta property="og:title" content={meta.title} />*/}
			{/*<meta property="og:image" content={meta.cardImage} />*/}

			{/* OG image */}
			<meta property="og:url" content="https://www.pixelmindstudio.co/" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={defaultTitle} />
			<meta property="og:description" content={defaultDescription} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:title" content={defaultTitle} />

			{/* twitter OG Meta */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:domain" content="pixelmindstudio.co" />
			<meta name="twitter:site" content="@pixelmindstudio" />
			<meta property="twitter:url" content="https://www.pixelmindstudio.co/" />
			<meta name="twitter:title" content={title ?? defaultTitle} />
			<meta name="twitter:description" content={description ?? defaultDescription} />
			<meta name="twitter:image" content={image ?? ogImage} />

			<meta name="robots" content="follow, index" />
			<link href="/favicon.ico" rel="shortcut icon" />
		</Head>
	)
}

export default HeadMeta
