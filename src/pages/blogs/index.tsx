import { PreviewSuspense } from 'next-sanity/preview'
import { lazy, useState } from 'react'
import client from '@lib/sanity.client'
import Layout from '@/components/layout'
import { Post, Preview, Services as ServicesType, Projects as ProjectsType } from '@root/typings'
import { allPosts, allProjects, allServices } from '@lib/sanity.queries'

import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Services from '@/components/services'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials'
import Blog from '@/components/blog'

import { Inter } from 'next/font/google'
import HeadMeta from '@/components/head-meta'
import {NextSeo} from "next-seo";
import ogUrl from "@/common/imageUrl";

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const PreviewBlogPage = lazy(() => import('@components/Studio/PreviewBlogPage'))

export const getStaticProps = async ({ preview = false }) => {
	if (preview) {
		return { props: { preview } }
	}

	const getPost = await client.fetch(allPosts)
	const featuredPost = getPost.filter((post: Post) => post.featured === true)
	const allPost = getPost.filter((post: Post) => post.featured === false)

	const data = {
		featuredPost,
		allPost,
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
	}
}) {

	if (preview) {
		return (
			<PreviewSuspense fallback={loading()}>
				<PreviewBlogPage />
			</PreviewSuspense>
		)
	}

	return (
		<>
			<NextSeo
				key={'Pixelmind Studio | Blogs'}
				title="Pixelmind Studio | Blogs"
				description="All our learnings and opinions are here"
				openGraph={{
					type: 'website',
					locale: 'en_GB',
					url: process.env.NEXT_PUBLIC_URL,
					title: 'Pixelmind Studio | Blogs',
					description: 'All our learnings and opinions are here',
					images: [
						{ url: ogUrl }
					],
					siteName: 'Pixelmind Studio | Blogs',
				}}
				twitter={{
					handle: '@handle',
					site: '@pixelmindstudio',
					cardType: 'summary_large_image',
				}}
			/>
			<PreviewSuspense fallback={loading()}>
				<Layout>
					<div className="rounded-xl overflow-hidden flex flex-col gap-5">
						<section className="h-[94vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-5 md:p-16 text-black rounded-2xl">
							<div className="w-full xl:w-[50%]">
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Blogs</h1>
								<p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
									from stunning web designs to captivating graphics and logos,each project reflects our commitment to quality and excellence.
								</p>
							</div>
						</section>
					</div>

					<Blog allPost={data.allPost} featuredPost={data.featuredPost} />
				</Layout>
			</PreviewSuspense>
		</>
	)
}
