import HeadMeta from '@/components/head-meta'
import Layout from '@/components/layout'
import {NextSeo} from "next-seo";

function index() {
	const ogUrl = "api/og";
	let ogImage = "";

	if (process.env.NODE_ENV === 'production') {
		ogImage = process.env.NEXT_PUBLIC_URL + ogUrl;
	} else {
		ogImage = 'http://localhost:3000/' + ogUrl;
	}

	return (
		<Layout>
			<NextSeo
				key={'Pixelmind Studio | About'}
				title="Pixelmind Studio | About"
				description="Learn about our team and expertise"
				openGraph={{
					type: 'article',
					locale: 'en_GB',
					url: process.env.NEXT_PUBLIC_URL,
					title: 'Pixelmind Studio | About',
					description: 'Learn about our team and expertise',
					images: [
						{ url: ogImage }
					],
					siteName: 'Pixelmind Studio | About',
				}}
				twitter={{
					handle: '@handle',
					site: '@pixelmindstudio',
					cardType: 'summary_large_image',
				}}
			/>

			<div className="rounded-xl overflow-hidden flex flex-col gap-5">
				<section className="h-[94vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-5 md:p-16 text-black rounded-2xl">
					<div className="w-full xl:w-[50%]">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About</h1>
						<p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
							from stunning web designs to captivating graphics and logos,each project reflects our commitment to quality and excellence.
						</p>
					</div>
				</section>

				<section className="w-full bg-slate-50 flex justify-end flex-col gap-10 p-5 md:p-16 text-black rounded-2xl">
					about us here
				</section>
			</div>
		</Layout>
	)
}

export default index
