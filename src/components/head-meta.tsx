import { SEO } from '@root/typings';
import Head from 'next/head';
import React from 'react'

function HeadMeta({ title, description, keywords, image }: SEO) {
	const defaultTitle = "Pixelmind Studio";
	const defaultDescription = "Innovative digital design solutions that capture thee ssence of your message and engage your audience";
	const defaultKey = "ai tool, marketing, copywriting";
	const ogUrl = "/api/og-image";
	let ogImage = '';

	if (!image) {
		const url = typeof window !== 'undefined' ? window.location.origin : '';
		ogImage = url + ogUrl;
	}

	return (
		<Head>
			<title>{title ?? defaultTitle}</title>
			<meta name="description" content={description ?? defaultDescription} />
			<meta name="keywords" content={keywords ?? defaultKey} />

			{/* OG image */}
			<meta property="og:image" content={image ?? ogImage} />
			<meta property="og:url" content="https://www.pixelmindstudio.co/" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={title ?? defaultTitle} />
			<meta property="og:title" content={title ?? defaultTitle} />
			<meta property="og:description" content={description ?? defaultDescription} />

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
