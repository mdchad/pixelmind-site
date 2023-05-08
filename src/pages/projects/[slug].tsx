import PortableText from 'react-portable-text'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import client from '@lib/sanity.client'
import Layout from '@/components/layout'
import { Projects, Preview } from '@root/typings'
import { allProjects, projectsPostsQuery } from 'lib/sanity.queries'

import { Inter } from 'next/font/google'
import Image from 'next/image'
import { urlForImage } from '@root/lib/sanity.image'
import HeadMeta from '@/components/head-meta'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const PreviewProjectsInnerPage = lazy(
	() => import('@components/Studio/PreviewProjectsInnerPage')
)

export const getStaticPaths = async () => {
	const posts = await client.fetch(allProjects)

	const path = posts.map((post: any) => ({
		params: { slug: post.slug.current },
	}))

	return {
		paths: path,
		fallback: 'blocking',
	}
}

export const getStaticProps = async ({ preview = false, params }: any) => {
	if (preview) {
		return { props: { preview } }
	}

	const post = await client.fetch(projectsPostsQuery, { slug: params?.slug })

	if (!post) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			data: post,
		},

		revalidate: 60, // after 60 seconds, it will be regenerated
	}
}

// loading the preview component
export const loading = () => (
	<div
		className={`flex justify-center items-center h-screen w-screen ${inter.variable} font-sans`}
	>
		<h1>Loading...</h1>
	</div>
)

export default function IndexPage({
	preview,
	data,
}: {
	preview: Preview
	data: Projects
}) {
	if (preview) {
		return (
			<PreviewSuspense fallback={loading()}>
				<PreviewProjectsInnerPage />
			</PreviewSuspense>
		)
	}

	return (
		<main key={data._id}>
			<HeadMeta
				title={data.title}
				description={data.excerpt}
				keywords={data.categories.map((category) => category.title).join(', ')}
				image={urlForImage(data.mainImage).url()}
			/>

			<Layout>
				<article>
					<div className="rounded-xl overflow-hidden flex flex-col gap-5">
						<section className="min-h-[50vh] h-auto w-full bg-slate-50 flex justify-center flex-col gap-12 p-16 text-black rounded-2xl">
							<div className="w-full xl:w-[50%]">
								{data.title && (
									<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
										{data.title}
									</h1>
								)}

								{data.mainImage && (
									<div className="relative w-full h-80 drop-shadow-xl">
										<Image
											className="object-cover object-left lg:object-center py-4"
											src={urlForImage(data.mainImage).url()}
											alt={
												data.mainImage.alt
													? data.mainImage.alt.current
													: data.title
											}
											fill
										/>
									</div>
								)}
							</div>

							<div className="flex flex-col md:flex-row gap-10">
								{data.client && (
									<div className="flex-1">
										<h2 className="text-gray-400 font-light text-sm mb-[.8em]">
											Client
										</h2>
										<p className="text-sm">{data.client}</p>
									</div>
								)}

								{data.description && (
									<div className="flex-1 desc">
										<h2 className="text-gray-400 font-light text-sm mb-[.8em]">
											Description
										</h2>
										<p className="text-sm">{data.description}</p>
									</div>
								)}

								{data.categories && (
									<div className="services">
										<h2 className="text-gray-400 font-light text-sm mb-[.8em]">
											Services
										</h2>
										<ul className="text-sm">
											{data.categories.map((category: any) => (
												<li key={category._id}>{category.title}</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</section>

						{data.body && (
							<PortableText
								dataset={process.env.NEXT_PUBLIC_SANITY_DATAET}
								projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
								content={data.body}
								serializers={{
									h1: (props: any) => (
										<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
											{props.children}
										</h1>
									),
									h2: (props: any) => (
										<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
											{props.children}
										</h2>
									),
									li: (props: any) => (
										<li className="text-2xl md:text-3xl lg:text-4xl font-light">
											{props.children}
										</li>
									),
									link: (props: any) => (
										<a
											href={props.mark.href}
											className="text-2xl md:text-3xl lg:text-4xl font-light"
										>
											{props.children}
										</a>
									),
									p: (props: any) => (
										<p className="text-2xl md:text-3xl lg:text-4xl font-light mb-3">
											{props.children}
										</p>
									),
								}}
							/>
						)}
					</div>
				</article>
			</Layout>
		</main>
	)
}
