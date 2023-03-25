'use client'

import { usePreview } from '@root/lib/sanity.preview'
import PreviewLayout from "@components/layout_preview"
import Blog from '@/components/blog'
import { allLinktree } from '@lib/sanity.queries'
import { Linktree as LinktreeType } from '@root/typings'
import { MdOutlineMail } from 'react-icons/md'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useGlitch } from 'react-powerglitch'
import { urlForImage } from '@root/lib/sanity.image'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function PreviewLinktreePage() {
	const getLinktree = usePreview(null, allLinktree);
	const glitch = useGlitch();

	return (
		<section className={`grid place-content-center text-center h-screen gap-10 ${inter.variable} font-sans`}>
			<div>
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" ref={glitch.ref}>Pixelmind Studio</h1>
				<p className="text-sm text-gray-500"> Tech, Design, and Development </p>
			</div>

			<div className="grid grid-cols-1 gap-4">
				{!getLinktree || getLinktree.length === 0 ? (
					<h1 className="text-4xl font-bold">No Linktree</h1>
				) : (
					<>
						{getLinktree.map((linktree: LinktreeType) => (
							<div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-light rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" key={linktree._id}>
								<div className="min-w-0 flex-1">
									<a href={linktree.href} className="focus:outline-none flex justify-between items-center gap-5">
										<p className="text-lg md:text-xl lg:text-2xl text-gray-200">{linktree.title}</p>
										{linktree.image && (
											<Image
												width={30}
												height={30}
												src={urlForImage(linktree.image).url()}
												alt={linktree.title ?? 'icon'}
												className="rounded-full"
											/>
										)}
									</a>
								</div>
							</div>
						))}

						<div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-light rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
							<div className="min-w-0 flex-1">
								<a href="mailto:hello@pixelmindstudio.co" className="focus:outline-none flex justify-between items-center gap-5">
									<p className="text-lg md:text-xl lg:text-2xl text-gray-200">Email</p>
									<MdOutlineMail
										size={25}
									/>
								</a>
							</div>
						</div>
					</>
				)}
			</div>

			<p className="text-sm text-gray-700">©Pixelmind Studio {new Date().getFullYear()}</p>
		</section>
	)
}
