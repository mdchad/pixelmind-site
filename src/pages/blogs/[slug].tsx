import PortableText from 'react-portable-text';
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import client from '@lib/sanity.client'
import Layout from '@/components/layout'
import { Post, Preview } from '@root/typings'
import { postBySlugQuery, allPosts } from '@lib/sanity.queries'
import { NextSeo } from 'next-seo';

import { Inter } from 'next/font/google'
import HeadMeta from '@/components/head-meta';
import { urlForImage } from '@root/lib/sanity.image';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const PreviewBlogInnerPage = lazy(() => import('@components/Studio/PreviewBlogInnerPage'))


export const getStaticPaths = async () => {
	const posts = await client.fetch(allPosts)

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

	const post = await client.fetch(postBySlugQuery, { slug: params?.slug })

	if (!post) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			post
		},

		revalidate: 60 // after 60 seconds, it will be regenerated
	}
}

// loading the preview component
export const loading = () => (
	<div className={`flex justify-center items-center h-screen w-screen ${inter.variable} font-sans`}>
		<h1>Loading...</h1>
	</div>
)

export default function IndexPage({ preview, post }: {
	preview: Preview;
	post: Post;
}) {
	const ogImage = urlForImage(post.mainImage).url()

	if (preview) {
		return (
			<PreviewSuspense fallback={loading()}>
				<PreviewBlogInnerPage />
			</PreviewSuspense>
		)
	}

	return (
		<main key={post._id}>
			<NextSeo
				key={post.title}
				title={post.title}
				description={post.excerpt}
				openGraph={{
					type: 'article',
					locale: 'en_GB',
					url: process.env.NEXT_PUBLIC_URL,
					title: post.title,
					description: post.excerpt,
					images: [
						{ url: ogImage }
					],
					siteName: post.title,
				}}
				twitter={{
					handle: '@handle',
					site: '@pixelmindstudio',
					cardType: 'summary_large_image',
				}}
			/>

			<Layout>
				<article>
					<div className="rounded-xl overflow-hidden flex flex-col gap-5">
						<section className="h-[94vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-5 md:p-16 text-black rounded-2xl">
							<div className="w-full xl:w-[50%]">
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{post.title}</h1>
								<p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
									{/* {post.body} */}
								</p>
							</div>
						</section>
					</div>

					{post.body && (
						<div>
							<PortableText
								dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
								projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
								content={post.body}
								serializers={{
									h1: (props: any) => (<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{props.children}</h1>),
									h2: (props: any) => (<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{props.children}</h2>),
									li: (props: any) => (<li className="text-2xl md:text-3xl lg:text-4xl font-light">{props.children}</li>),
									link: (props: any) => (<a href={props.mark.href} className="text-2xl md:text-3xl lg:text-4xl font-light">{props.children}</a>),
								}}
							/>
						</div>
					)}

				</article>
			</Layout>
		</main>
	)
}


