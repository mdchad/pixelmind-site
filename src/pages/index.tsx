import { PreviewSuspense } from 'next-sanity/preview'
import { lazy, useState } from 'react'
import client from '@lib/sanity.client'
import Layout from '@/components/layout'
import { Post, Preview, Services as ServicesType, Projects as ProjectsType } from '@root/typings'
import { allPosts, allProjects, allServices } from '@lib/sanity.queries'

import HeadMeta from '@/components/head-meta';
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Services from '@/components/services'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials'
import Blog from '@/components/blog'

import { Inter } from 'next/font/google'

import Head from 'next/head';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const PreviewIndexPage = lazy(() => import('@components/Studio/PreviewIndexPage'))

export const getStaticProps = async ({ preview = false }) => {
	if (preview) {
		return { props: { preview } }
	}

	const getPost = await client.fetch(allPosts)
	const featuredPost = getPost.filter((post: Post) => post.featured === true)
	const allPost = getPost.filter((post: Post) => post.featured === false)

	const getProjects = await client.fetch(allProjects)

	const getServices = await client.fetch(allServices)

	const data = {
		featuredPost,
		allPost,
		getProjects,
		getServices
	}

	return { props: { preview, data } }
}

// loading the preview component
export const loading = () => (
	<div className={`flex justify-center items-center h-screen w-screen ${inter.variable} font-sans`}>
		<h1>Loading...</h1>
	</div>
)

export default function IndexPage({ preview, data }: {
	preview: Preview;
	data: {
		featuredPost: Post[];
		allPost: Post[];
		getProjects: ProjectsType[]
		getServices: ServicesType
	}
}) {
	if (preview) {
		return (
			<PreviewSuspense fallback={loading()}>
				{/* set how you want to preview the document */}
				<PreviewIndexPage />
			</PreviewSuspense>
		)
	}

	const defaultTitle = "Pixelmind Studio | Building Bridges Between Business and Technology";
	const defaultDescription = "At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow.";
	const defaultKey = "custom technology solutions, web design, software development, digital marketing, business growth, technology consulting, innovation, digital transformation, project management, user experience";
	const ogUrl = "/api/og-image";
	let ogImage = "https://www.pixelmindstudio.co" + ogUrl;

	return (
		<PreviewSuspense fallback={loading()}>
			{/* <HeadMeta /> */}
			<Head>
				<title>{defaultTitle}</title>
				<meta name="description" content={defaultDescription} />
				<meta name="keywords" content={defaultKey} />

				{/* OG image */}
				<meta name="og:image" content={ogUrl} />
				<meta name="og:url" content="https://www.pixelmindstudio.co/" />
				<meta name="og:type" content="website" />
				<meta name="og:site_name" content={defaultTitle} />
				<meta name="og:title" content={defaultTitle} />
				<meta name="og:description" content={defaultDescription} />

				{/* twitter OG Meta */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:domain" content="pixelmindstudio.co" />
				<meta name="twitter:site" content="@pixelmindstudio" />
				<meta name="twitter:url" content="https://www.pixelmindstudio.co/" />
				<meta name="twitter:title" content={defaultTitle} />
				<meta name="twitter:description" content={defaultDescription} />
				<meta name="twitter:image" content={ogUrl} />

				<meta name="robots" content="follow, index" />
				<link href="/favicon.ico" rel="shortcut icon" />
			</Head>

			<Layout>
				<div className="rounded-xl overflow-hidden flex flex-col gap-5">
					<Hero />
					<Projects projects={data.getProjects} />
					<div className="grid grid-cols-3">
						<div className="col-span-3 lg:col-span-2 lg:col-start-2 p-5">
							<Services services={data.getServices} />
						</div>
					</div>
					{/* <Testimonials /> */}
					{/* <Team /> */}
					<Blog allPost={data.allPost} featuredPost={data.featuredPost} />
				</div>
			</Layout>
		</PreviewSuspense>
	)
}
