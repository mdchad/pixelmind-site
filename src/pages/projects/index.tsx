import { PreviewSuspense } from 'next-sanity/preview'
import { lazy, useState } from 'react'
import client from '@lib/sanity.client'
import { Preview, Projects as ProjectsType } from '@root/typings'
import { allProjects } from '@lib/sanity.queries'
import Layout from '@/components/layout'
import Projects from '@/components/projects'

import { Inter } from 'next/font/google'
import HeadMeta from '@/components/head-meta'
import ogUrl from '@/common/imageUrl'
import { NextSeo } from 'next-seo'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const PreviewProjectPage = lazy(
	() => import('@components/Studio/PreviewProjectPage')
)

export const getStaticProps = async ({ preview = false }) => {
	if (preview) {
		return { props: { preview } }
	}

	const getProjects = await client.fetch(allProjects)

	const data = {
		getProjects,
	}

	return { props: { preview, data } }
}

// loading the preview component
export const loading = () => (
	<div
		className={`flex justify-center items-center h-screen w-screen ${inter.variable} font-sans`}
	>
		<h1>Loading...</h1>
	</div>
)

export default function ProjectPage({
	preview,
	data,
}: {
	preview: Preview
	data: {
		getProjects: ProjectsType[]
	}
}) {
	if (preview) {
		return (
			<PreviewSuspense fallback={loading()}>
				{/* set how you want to preview the document */}
				<PreviewProjectPage />
			</PreviewSuspense>
		)
	}

	return (
		<>
			<NextSeo
				key={'Pixelmind Studio | Projects'}
				title="Pixelmind Studio | Projects"
				description="Our projects"
				openGraph={{
					type: 'article',
					locale: 'en_GB',
					url: process.env.NEXT_PUBLIC_URL,
					title: 'Pixelmind Studio | Projects',
					description: 'Our projects',
					images: [{ url: ogUrl }],
					siteName: 'Pixelmind Studio | Projects',
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
						<section className="h-[94vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-16 text-black rounded-2xl">
							<div className="w-full xl:w-[50%]">
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
									Projects
								</h1>
								<p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
									from stunning web designs to captivating graphics and
									logos,each project reflects our commitment to quality and
									excellence.
								</p>
							</div>
						</section>

						<Projects projects={data.getProjects} />
					</div>
				</Layout>
			</PreviewSuspense>
		</>
	)
}
