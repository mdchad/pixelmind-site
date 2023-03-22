import Layout from '@/components/layout'
import Image from 'next/image';
import { Projects } from '@root/typings'

import { allProjects, projectsPostsQuery } from 'lib/sanity.queries'
import client from '@root/lib/sanity.client';
import { urlForImage } from '@root/lib/sanity.image';
import PortableText from 'react-portable-text';

interface Props {
	datas: Projects;
}

const Project = ({ datas }: Props) => {

	return (
		<main key={datas._id}>
			<Layout>
				<article>
					<div className="rounded-xl overflow-hidden flex flex-col gap-5">
						<section className="min-h-[50vh] h-auto w-full bg-slate-50 flex justify-center flex-col gap-12 p-16 text-black rounded-2xl">
							<div className="w-full xl:w-[50%]">
								{datas.title && (
									<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">{datas.title}</h1>
								)}

								{datas.mainImage && (
									<div className="relative w-full h-80 drop-shadow-xl">
										<Image
											className='object-cover object-left lg:object-center py-4'
											src={urlForImage(datas.mainImage).url()}
											alt={datas.mainImage.alt ? datas.mainImage.alt.current : datas.title}
											fill
										/>
									</div>
								)}
							</div>

							<div className="flex flex-col md:flex-row gap-10">
								{datas.client && (
									<div className="flex-1">
										<h2 className="text-gray-400 font-light text-sm mb-[.8em]">Client</h2>
										<p className="text-sm">{datas.client}</p>
									</div>
								)}

								{datas.description && (
									<div className="flex-1 desc">
										<h2 className="text-gray-400 font-light text-sm mb-[.8em]">Description</h2>
										<p className="text-sm">
											{datas.description}
										</p>
									</div>
								)}

								{datas.categories && (
									<div className="services">
										<h2 className="text-gray-400 font-light text-sm mb-[.8em]">Services</h2>
										<ul className="text-sm">
											{datas.categories.map((category: any) => (
												<li key={category._id}>{category.title}</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</section>

						{datas.body && (
							<PortableText
								dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
								projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
								content={datas.body}
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
			</Layout>
		</main>
	)
}

export default Project

export const getStaticPaths = async () => {
	const datas = await client.fetch(allProjects)

	const path = datas.map((data: any) => ({
		params: { slug: data.slug.current },
	}))

	return {
		paths: path,
		fallback: 'blocking',
	}
}

export const getStaticProps = async ({ params }: any) => {
	const datas = await client.fetch(projectsPostsQuery, { slug: params?.slug })

	if (!datas) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			datas
		},

		revalidate: 60 // after 60 seconds, it will be regenerated
	}
}

