// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'

import client from '@lib/sanity.client'
import { allPosts, allProjects } from '@lib/sanity.queries'

import { Post, Projects } from '@root/typings'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const URL = process.env.NEXT_PUBLIC_URL;

	const getPost = await client.fetch(allPosts)
	const postField = getPost.map((post: Post) => ({
		loc: URL + 'blogs/' + post.slug.current,
		lastmod: new Date().toISOString(),
	}))

	const getProjects = await client.fetch(allProjects)
	const projectField = getProjects.map((project: Projects) => ({
		loc: URL + 'projects/' + project.slug.current,
		lastmod: new Date().toISOString(),
	}))

	const fields = [
		{
			loc: URL,
			lastmod: new Date().toISOString(),
		},
		{
			loc: URL + 'about',
			lastmod: new Date().toISOString(),
		},
		{
			loc: URL + 'projects',
			lastmod: new Date().toISOString(),
		},
		{
			loc: URL + 'blogs',
			lastmod: new Date().toISOString(),
		},
		...postField,
		...projectField,
	]

	return getServerSideSitemapLegacy(ctx, fields as ISitemapField[])
}

// Default export to prevent next.js errors
export default function Sitemap() { }
