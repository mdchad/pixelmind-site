import { PreviewSuspense } from 'next-sanity/preview'
import { lazy, useState } from 'react'
import client from '@lib/sanity.client'
import Layout from '@/components/layout'
import { Preview, Linktree as LinktreeType } from '@root/typings'
import { allLinktree } from '@lib/sanity.queries'

import { Inter } from 'next/font/google'
import Linktree from '@/components/linktree'
import ogUrl from "@/common/imageUrl";
import {NextSeo} from "next-seo";

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const PreviewLinktreePage = lazy(() => import('@components/Studio/PreviewLinktreePage'))

export const getStaticProps = async ({ preview = false }) => {
	if (preview) {
		return { props: { preview } }
	}

	const getLinktree = await client.fetch(allLinktree)

	return { props: { preview, getLinktree } }
}

// loading the preview component
export const loading = () => (
	<div className={`flex justify-center items-center h-screen w-screen ${inter.variable} font-sans`}>
		<h1>Loading...</h1>
	</div>
)

export default function IndexPage({ preview, getLinktree }: {
	preview: Preview;
	getLinktree: LinktreeType[];
}) {
	if (preview) {
		return (
			<PreviewSuspense fallback={loading()}>
				<PreviewLinktreePage />
			</PreviewSuspense>
		)
	}

	return (
		<>
			<NextSeo
				key={'Pixelmind Studio | Linktree'}
				title="Pixelmind Studio | Linktree"
				description="All the links to our social media"
				openGraph={{
					type: 'article',
					locale: 'en_GB',
					url: process.env.NEXT_PUBLIC_URL,
					title: 'Pixelmind Studio | Linktree',
					description: 'All the links to our social media',
					images: [
						{ url: ogUrl }
					],
					siteName: 'Pixelmind Studio | Linktree',
				}}
				twitter={{
					handle: '@handle',
					site: '@pixelmindstudio',
					cardType: 'summary_large_image',
				}}
			/>
			<PreviewSuspense fallback={loading()}>
				<Linktree getLinktree={getLinktree} />
			</PreviewSuspense>
		</>
	)
}
