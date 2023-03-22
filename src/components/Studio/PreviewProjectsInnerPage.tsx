'use client'

import { usePreview } from '@root/lib/sanity.preview'
import PreviewLayout from "@components/layout_preview"
import { projectsPostsQuery } from '@lib/sanity.queries'
import PortableText from 'react-portable-text';
import { useRouter } from 'next/router'
import Image from 'next/image';
import { urlForImage } from '@root/lib/sanity.image';

export default function PreviewBlogInnerPage() {
	const router = useRouter()
	const { slug } = router.query

	const data = usePreview(null, projectsPostsQuery, { slug: slug });

	return (
		<PreviewLayout>
			<article>
				<div className="rounded-xl overflow-hidden flex flex-col gap-5">
					<section className="min-h-[50vh] h-auto w-full bg-slate-50 flex justify-center flex-col gap-12 p-16 text-black rounded-2xl">
						<div className="w-full xl:w-[50%]">
							{data.title && (
								<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">{data.title}</h1>
							)}

							{data.mainImage && (
								<div className="relative w-full h-80 drop-shadow-xl">
									<Image
										className='object-cover object-left lg:object-center py-4'
										src={urlForImage(data.mainImage).url()}
										alt={data.mainImage.alt ? data.mainImage.alt.current : data.title}
										fill
									/>
								</div>
							)}
						</div>

						<div className="flex flex-col md:flex-row gap-10">
							{data.client && (
								<div className="flex-1">
									<h2 className="text-gray-400 font-light text-sm mb-[.8em]">Client</h2>
									<p className="text-sm">{data.client}</p>
								</div>
							)}

							{data.description && (
								<div className="flex-1 desc">
									<h2 className="text-gray-400 font-light text-sm mb-[.8em]">Description</h2>
									<p className="text-sm">
										{data.description}
									</p>
								</div>
							)}

							{data.categories && (
								<div className="services">
									<h2 className="text-gray-400 font-light text-sm mb-[.8em]">Services</h2>
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
								h1: (props: any) => (<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{props.children}</h1>),
								h2: (props: any) => (<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{props.children}</h2>),
								li: (props: any) => (<li className="text-2xl md:text-3xl lg:text-4xl font-light">{props.children}</li>),
								link: (props: any) => (<a href={props.mark.href} className="text-2xl md:text-3xl lg:text-4xl font-light">{props.children}</a>),
								p: (props: any) => (<p className="text-2xl md:text-3xl lg:text-4xl font-light mb-3">{props.children}</p>),
							}}
						/>
					)}
				</div>
			</article>
		</PreviewLayout>
	)
}
