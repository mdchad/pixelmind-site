'use client'

import { usePreview } from '@root/lib/sanity.preview'
import PreviewLayout from "@components/layout_preview"
import { postBySlugQuery } from '@lib/sanity.queries'
import PortableText from 'react-portable-text';
import { useRouter } from 'next/router'

export default function PreviewBlogInnerPage() {
	const router = useRouter()
	const { slug } = router.query

	const post = usePreview(null, postBySlugQuery, { slug: slug });

	return (
		<PreviewLayout>
			<article>
				<div className="rounded-xl overflow-hidden flex flex-col gap-5">
					<section className="h-[94vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-5 md:p-16 text-black rounded-2xl">
						<div className="w-full xl:w-[50%]">
							{post.title && (
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{post.title}</h1>
							)}
							<p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
								{/* {data.body} */}
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
		</PreviewLayout>
	)
}
