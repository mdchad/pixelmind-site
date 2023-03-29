import { SEO } from '@root/typings';
import React from 'react'
import { DefaultSeo } from "next-seo";

function HeadMeta({ title, description, keywords, image }: SEO) {
	const defaultTitle = "Pixelmind Studio | Building Bridges Between Business and Technology";
	const defaultDescription = "At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow.";
	const defaultKey = "custom technology solutions, web design, software development, digital marketing, business growth, technology consulting, innovation, digital transformation, project management, user experience";
	const ogUrl = "api/og";
	let ogImage = "";

	if (!image) {
		if (process.env.NODE_ENV === 'production') {
			ogImage = process.env.NEXT_PUBLIC_URL + ogUrl;
		} else {
			ogImage = 'http://localhost:3000/' + ogUrl;
		}
	}

	return (
		<DefaultSeo
			key={defaultKey}
			defaultTitle={defaultTitle}
			title={defaultTitle}
			description={defaultDescription}
			openGraph={{
				type: 'website',
				locale: 'en_GB',
				url: process.env.NEXT_PUBLIC_URL,
				siteName: defaultTitle,
				title: defaultTitle,
				description: defaultDescription,
				images: [
					{ url: ogImage }
				]
			}}
			twitter={{
				handle: '@handle',
				site: '@pixelmindstudio',
				cardType: 'summary_large_image'
			}}
		/>
	);

	// return (
	// 	<Head>
	// 		<title>{title ?? defaultTitle}</title>
	// 		<meta name="robots" content="follow, index" />
	// 		<link href="/favicon.ico" rel="shortcut icon" />
	// 		<meta name="description" content={description ?? defaultDescription} />
	// 		<meta name="keywords" content={keywords ?? defaultKey} />
	//
	// 		{/* OG image */}
	// 		<meta property="og:image" content={image ?? ogImage} />
	// 		<meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
	// 		<meta property="og:type" content="website" />
	// 		<meta property="og:site_name" content={title ?? defaultTitle} />
	// 		<meta property="og:title" content={title ?? defaultTitle} />
	// 		<meta property="og:description" content={description ?? defaultDescription} />
	//
	// 		{/* twitter OG Meta */}
	// 		<meta name="twitter:card" content="summary_large_image" />
	// 		<meta name="twitter:domain" content="pixelmindstudio.co" />
	// 		<meta name="twitter:site" content="@pixelmindstudio" />
	// 		<meta property="twitter:url" content="https://www.pixelmindstudio.co/" />
	// 		<meta name="twitter:title" content={title ?? defaultTitle} />
	// 		<meta name="twitter:description" content={description ?? defaultDescription} />
	// 		<meta name="twitter:image" content={image ?? ogImage} />
	// 	</Head>
	// )
}

export default HeadMeta
