import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlForImage } from '@root/lib/sanity.image'
import { Cards, Post } from '@root/typings'
import BlogCards from '@/components/blogCards'

const Card = ({ className, children, sm, md, lg, uid }: Cards) => {
	const column = `col-span-${sm} md:col-span-${md} lg:col-span-${lg}`;
	const classes = className ? className : '';

	return (
		<div key={uid} className={`w-full bg-slate-50 p-5 rounded-2xl ${classes ? classes : ''} ${column ? column : ''}`}>
			{children}
		</div>
	)
}

export default function Blogs({ allPost, featuredPost }: { allPost: Post[], featuredPost: Post[] }) {

	return (
		// <section className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
		<section className="grid grid-cols-3 gap-4">
			<Card sm={3} md={3} lg={1}>
				<div className="text-black flex flex-col flex-1 justify-end h-full gap-10">
					<div>
						<h4 className="text-3xl md:text-4xl font-bold">Explore, be curious.</h4>
						{/* <p className="text-base md:text-lg lg:text-xl font-light">Discover stories, thinking, and expertise from writers on any topic.</p> */}
						<p className="text-base md:text-lg lg:text-xl font-light">Discover valuable business insights and fresh perspectives</p>
					</div>
					<Link href="/blogs">
						View All Posts
					</Link>
				</div>
			</Card>

			{featuredPost && featuredPost.map((post: Post, index) => (
				<BlogCards key={post._id} post={post} sm={3} md={3} lg={2} />
			))}

			{allPost && allPost.map((post: Post, index: number) => (
				<BlogCards key={post._id} post={post} sm={3} md={1} lg={1} />
			))}
		</section>
	)
}
