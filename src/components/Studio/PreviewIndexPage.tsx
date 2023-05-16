'use client'

import { usePreview } from '@root/lib/sanity.preview'
import PreviewLayout from '@components/layout_preview'

import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Services from '@/components/services'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials'
import Blog from '@/components/blog'

import { allPosts, allProjects, allServices } from '@lib/sanity.queries'
import { Post } from '@root/typings'

export default function PreviewDocumentsCount() {
	const post = usePreview(null, allPosts)

	const featuredPost = post.filter((post: Post) => post.featured === true)
	const allPost = post.filter((post: Post) => post.featured === false)

	const getProjects = usePreview(null, allProjects)

	const getServices = usePreview(null, allServices)

	const data = {
		featuredPost,
		allPost,
		getProjects,
		getServices,
	}

	return (
		<>
			<PreviewLayout>
				<div className="rounded-xl overflow-hidden flex flex-col gap-5">
					<Hero />
					<Projects projects={data.getProjects} />
					<div className="grid grid-cols-3">
						<div className="col-span-3 lg:col-span-2 lg:col-start-2 p-5">
							<Services />
						</div>
					</div>
					{/* <Testimonials /> */}
					{/* <Team /> */}
					<Blog allPost={data.allPost} featuredPost={data.featuredPost} />
				</div>
			</PreviewLayout>
		</>
	)
}
