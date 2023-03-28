/* eslint-disable react/jsx-key */
import { PreviewSuspense } from 'next-sanity/preview'
import { Key, lazy, useState } from 'react'
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
		getServices,
		openGraph: [
			{
				property: 'og:title',
				content: 'Pixelmind Studio | Building Bridges Between Business and Technology',
				key: 'og:title' as Key,
			},
			{
				property: 'og:description',
				content: 'At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow.',
				key: 'og:description' as Key,
			},
			{
				property: 'og:image',
				content: 'https://www.pixelmindstudio.co/api/og',
				key: 'og:image' as Key,
			},
			{
				property: 'og:url',
				content: 'https://www.pixelmindstudio.co/',
				key: 'og:url' as Key,
			},
			{
				property: 'og:type',
				content: 'website',
				key: 'og:type' as Key,
			},
			{
				property: 'twitter:title',
				content: 'Pixelmind Studio | Building Bridges Between Business and Technology',
				key: 'twitter:title' as Key,
			},
			{
				property: 'twitter:description',
				content: 'custom technology solutions, web design, software development, digital marketing, business growth, technology consulting, innovation, digital transformation, project management, user experience',
				key: 'twitter:description' as Key,
			}
		]
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
		openGraph: []
	}
}) {

	if (preview) {
		return (
			<PreviewSuspense fallback={loading()}>
				{/* set how you want to preview the document */}
				<PreviewIndexPage />
				<Head>
					<title>Pixelmind Studio | Building Bridges Between Business and Technology</title>
					<meta name="description" content="At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow." />

					<meta property="og:url" content="https://www.pixelmindstudio.co" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Pixelmind Studio | Building Bridges Between Business and Technology" />
					<meta property="og:description" content="At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow." />
					<meta property="og:image" content="https://www.pixelmindstudio.co/api/og" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta property="twitter:domain" content="pixelmindstudio.co" />
					<meta property="twitter:url" content="https://www.pixelmindstudio.co" />
					<meta name="twitter:title" content="Pixelmind Studio | Building Bridges Between Business and Technology" />
					<meta name="twitter:description" content="At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow." />
					<meta name="twitter:image" content="https://www.pixelmindstudio.co/api/og" />
				</Head>
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
				{data.openGraph && data.openGraph.map((og: any, index: number) => (
					<meta {...og} />
				))}

				{/* <title>Pixelmind Studio | Building Bridges Between Business and Technology</title>
				<meta name="description" content="At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow." /> /

				<meta property="og:url" content="https://www.pixelmindstudio.co" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Pixelmind Studio | Building Bridges Between Business and Technology" />
				<meta property="og:description" content="At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow." />
				<meta property="og:image" content="/api/og-image" /> /

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="pixelmindstudio.co" />
				<meta property="twitter:url" content="https://www.pixelmindstudio.co" />
				<meta name="twitter:title" content="Pixelmind Studio | Building Bridges Between Business and Technology" />
				<meta name="twitter:description" content="At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, web design, and digital marketing services that help businesses grow." />
				<meta name="twitter:image" content="/api/og-image" /> */}
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
