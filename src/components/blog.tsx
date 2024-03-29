import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlForImage } from '@root/lib/sanity.image'
import { Cards, Post } from '@root/typings'
import BlogCards from '@/components/blogCards'

const Card = ({ className, children, sm, md, lg, uid }: Cards) => {
	const column = `col-span-${sm} md:col-span-${md} lg:col-span-${lg}`
	const classes = className ? className : ''

	return (
		<div
			key={uid}
			className={`w-full bg-slate-50 p-5 rounded-2xl ${
				classes ? classes : ''
			} ${column ? column : ''}`}
		>
			{children}
		</div>
	)
}

export default function Blogs({
	allPost,
	featuredPost,
}: {
	allPost: Post[]
	featuredPost: Post[]
}) {
	return (
		// <section className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
		<section className="grid grid-cols-3 gap-4">
			<Card sm={3} md={3} lg={1}>
				<div className="text-black flex flex-col flex-1 justify-end h-full gap-10">
					<div className="flex flex-col gap-16">
						<div className="animate-pulse">
							<svg
								width="200"
								height="200"
								viewBox="0 0 200 200"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{' '}
								<g clip-path="url(#clip0_118_201)">
									{' '}
									<path
										d="M100 0L102.039 58.4951C102.498 71.6824 118.257 78.21 127.907 69.2101L170.711 29.2893L130.79 72.0931C121.79 81.7429 128.318 97.5019 141.505 97.9615L200 100L141.505 102.039C128.318 102.498 121.79 118.257 130.79 127.907L170.711 170.711L127.907 130.79C118.257 121.79 102.498 128.318 102.039 141.505L100 200L97.9615 141.505C97.5019 128.318 81.7429 121.79 72.0931 130.79L29.2893 170.711L69.2101 127.907C78.21 118.257 71.6824 102.498 58.4951 102.039L0 100L58.4951 97.9615C71.6824 97.5019 78.21 81.7429 69.2101 72.0931L29.2893 29.2893L72.0931 69.2101C81.7429 78.21 97.5019 71.6824 97.9615 58.4951L100 0Z"
										fill="url(#paint0_linear_118_201)"
									/>{' '}
								</g>{' '}
								<defs>
									{' '}
									<linearGradient
										id="paint0_linear_118_201"
										x1="100"
										y1="0"
										x2="100"
										y2="200"
										gradientUnits="userSpaceOnUse"
									>
										{' '}
										<stop stop-color="#A7B5FF" />{' '}
										<stop offset="1" stop-color="#F3ACFF" />{' '}
									</linearGradient>{' '}
									<clipPath id="clip0_118_201">
										{' '}
										<rect width="200" height="200" fill="white" />{' '}
									</clipPath>{' '}
								</defs>{' '}
							</svg>
						</div>

						<div>
							<h4 className="text-3xl md:text-4xl font-bold">
								Explore, be curious.
							</h4>
							{/* <p className="text-base md:text-lg lg:text-xl font-light">Discover stories, thinking, and expertise from writers on any topic.</p> */}
							<p className="text-base md:text-lg lg:text-xl font-light">
								Discover valuable business insights and fresh perspectives
							</p>
						</div>
					</div>
					<Link href="/blogs">View All Posts</Link>
				</div>
			</Card>

			{featuredPost &&
				featuredPost.map((post: Post, index) => (
					<BlogCards key={post._id} post={post} sm={3} md={3} lg={2} />
				))}

			{allPost &&
				allPost.map((post: Post, index: number) => (
					<BlogCards key={post._id} post={post} sm={3} md={1} lg={1} />
				))}
		</section>
	)
}
