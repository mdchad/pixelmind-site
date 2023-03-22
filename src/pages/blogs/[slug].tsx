import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout'

import { groq } from 'next-sanity';
import client from '@root/lib/sanity.client';
import PortableText from 'react-portable-text';
import { postBySlugQuery, allPosts } from 'lib/sanity.queries'
import { Post } from '@root/typings'

interface Props {
	post: Post;
}

const Post = ({ post }: Props) => {
	return (
		<main key={post._id}>
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

				</article>
			</Layout>
		</main>
	)
}

export default Post

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

export const getStaticProps = async ({ params }: any) => {
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

