/* eslint-disable react/jsx-key */
import { PreviewSuspense } from "next-sanity/preview";
import { Key, lazy, useState } from "react";
import client from "@lib/sanity.client";
import Layout from "@/components/layout";
import {
	Post,
	Preview,
	Services as ServicesType,
	Projects as ProjectsType,
} from "@root/typings";
import { allPosts, allProjects, allServices } from "@lib/sanity.queries";

import HeadMeta from "@/components/head-meta";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Blog from "@/components/blog";

import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const PreviewIndexPage = lazy(
	() => import("@components/Studio/PreviewIndexPage")
);

export const getStaticProps = async ({ preview = false }) => {
	if (preview) {
		return { props: { preview } };
	}

	const getPost = await client.fetch(allPosts);
	const featuredPost = getPost.filter((post: Post) => post.featured === true);
	const allPost = getPost.filter((post: Post) => post.featured === false);

	const getProjects = await client.fetch(allProjects);

	const getServices = await client.fetch(allServices);

	const data = {
		featuredPost,
		allPost,
		getProjects,
		getServices,
		openGraph: [
			{
				property: "og:image",
				content:
					"https://glievsbwngosqvrxtupy.supabase.co/storage/v1/object/public/event-banners/Jul%208%20Darkest%20Hour%20LONG.jpeg?t=2022-06-28T21%3A47%3A43.910Z",
				key: "ogimage",
			},
			{
				property: "og:image:width",
				content: "400",
				key: "ogimagewidth",
			},
			{
				property: "og:image:height",
				content: "300",
				key: "ogimageheight",
			},
			{
				property: "og:url",
				content: `http://foobar.com/events`,
				key: "ogurl",
			},
			{
				property: "og:image:secure_url",
				content:
					"https://glievsbwngosqvrxtupy.supabase.co/storage/v1/object/public/event-banners/Jul%208%20Darkest%20Hour%20LONG.jpeg?t=2022-06-28T21%3A47%3A43.910Z",
				key: "ogimagesecureurl",
			},
			{
				property: "og:title",
				content: "Hey hey",
				key: "ogtitle",
			},
			{
				property: "og:description",
				content: "Ima description",
				key: "ogdesc",
			},
			{
				property: "og:type",
				content: "website",
				key: "website",
			},
		],
	};

	return { props: { preview, data } };
};

// loading the preview component
export const loading = () => (
	<div
		className={`flex justify-center items-center h-screen w-screen ${inter.variable} font-sans`}
	>
		<h1>Loading...</h1>
	</div>
);

export default function IndexPage({
	preview,
	data,
}: {
	preview: Preview;
	data: {
		featuredPost: Post[];
		allPost: Post[];
		getProjects: ProjectsType[];
		getServices: ServicesType;
		openGraph: [];
	};
}) {
	if (preview) {
		return (
			<PreviewSuspense fallback={loading()}>
				{/* set how you want to preview the document */}
				<PreviewIndexPage />
			</PreviewSuspense>
		);
	}

	return (
		<PreviewSuspense fallback={loading()}>
			<Layout>
				<div className="rounded-xl overflow-hidden flex flex-col gap-5">
					<Hero />
					<Projects projects={data.getProjects} />
					<div className="grid grid-cols-3">
						<div className="col-span-3 lg:col-span-2 lg:col-start-2 p-5">
							<Services services={data.getServices} />
						</div>
					</div>
					{/* <Testimonials /> */}
					{/* <Team /> */}
					<Blog
						allPost={data.allPost}
						featuredPost={data.featuredPost}
					/>
				</div>
			</Layout>
		</PreviewSuspense>
	);
}
