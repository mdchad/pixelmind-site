import { SEO } from '@root/typings';
import Head from 'next/head';
import React from 'react'

function HeadMeta({ title, description, keywords, image }: SEO) {
	const defaultTitle = "Pixelmind Studio";
	const defaultDescription = "Innovative digital design solutions that capture thee ssence of your message and engage your audience";
	const defaultKey = "ai tool, marketing, copywriting";
	const ogUrl = "api/og-image";
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
			<meta name="robots" content="index, follow" />
			<meta name="language" content="EN" />

			<meta
				property="og:image"
				content={image ?? ogImage}
			/>
		</Head>
	)
}

export default HeadMeta
