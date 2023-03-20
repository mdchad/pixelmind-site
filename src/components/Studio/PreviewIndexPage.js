'use client'

import { usePreview } from '@root/lib/sanity.preview'

import groq from 'groq'
import Blog from "@components/blog"
import PreviewLayout from "@components/layout_preview"
import Link from 'next/link'

export const query = groq`(*[_type == "post"]
    {
        ...,
        author->,
        categories[]->
    } | order(publishedAt desc)
)`

export default function PreviewDocumentsCount() {
	const data = usePreview(null, query);

	return (
		<>
			<PreviewLayout>
				<div className="fixed top-0 left-0 p-2 bg-black z-20 w-full flex justify-between">
					<p className="text-sm font-sans text-green-500 flex items-center gap-2">
						<span className="block bg-green-500 w-2 h-2 rounded-full"></span>
						<span>Preview Mode</span>
					</p>
					<p className="text-sm font-sans hover:text-gray-500">
						<Link href="/api/exit-preview">
							Exit Preview Mode
						</Link>
					</p>
				</div>

				<div className="mt-4">
					<Blog data={data} />
				</div>
			</PreviewLayout>
		</>
	)
}
