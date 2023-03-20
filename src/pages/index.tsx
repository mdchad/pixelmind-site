import { PreviewSuspense } from 'next-sanity/preview'
import { lazy, useState } from 'react'
import { query } from '@components/Studio/PreviewIndexPage'
import { client } from '@lib/sanity.client'
import Layout from '@/components/layout'

import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Services from '@/components/services'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials'
import Blog from '@/components/blog'

import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const PreviewIndexPage = lazy(() => import('@components/Studio/PreviewIndexPage'))

export const getStaticProps = async ({ preview = false }) => {
    if (preview) {
        return { props: { preview } }
    }

    const data = await client.fetch(query)

    return { props: { preview, data } }
}

// loading the preview component
export const loading = () => (
	<div className={`flex justify-center items-center h-screen w-screen ${inter.variable} font-sans`}>
		<h1>Loading...</h1>
	</div>
)

export default function IndexPage({ preview, data }: any) {
    if (preview) {
        return (
            <PreviewSuspense fallback={loading()}>
                {/* set how you want to preview the document */}
                <PreviewIndexPage />
            </PreviewSuspense>
        )
    }

    return (
        <PreviewSuspense fallback="Loading...">
            <Layout>
                <div className="rounded-xl overflow-hidden flex flex-col gap-5">
                    <Hero />
                    <Projects />
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-5">
                            <Services />
                        </div>
                    </div>
                    {/* <Testimonials /> */}
                    {/* <Team /> */}
                    <Blog data={data} />
                </div>
            </Layout>
        </PreviewSuspense>
    )
}
