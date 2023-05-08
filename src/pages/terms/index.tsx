import Layout from "@/components/layout";
import Head from "next/head";
import HeadMeta from "@/components/head-meta";
import { NextSeo } from "next-seo";
import ogUrl from "@/common/imageUrl";

function Terms() {
	return (
		<Layout>
			<NextSeo
				key={"Pixelmind Studio | Terms & Condition"}
				title="Pixelmind Studio | Terms & Condition"
				description="Terms and conditions"
				openGraph={{
					type: "article",
					locale: "en_GB",
					url: process.env.NEXT_PUBLIC_URL,
					title: "Pixelmind Studio | Terms & Conditions",
					description: "Terms and conditions",
					images: [{ url: ogUrl }],
					siteName: "Pixelmind Studio | Terms & Condition",
				}}
				twitter={{
					handle: "@handle",
					site: "@pixelmindstudio",
					cardType: "summary_large_image",
				}}
			/>

			<div className="rounded-xl overflow-hidden flex flex-col gap-5">
				<section className="h-[50vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-5 md:p-16 text-black rounded-2xl">
					<div className="w-full xl:w-[50%]">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
							Terms & Condition
						</h1>
						<p>
							By accessing or using the Site, you agree to be
							bound by these Terms.
						</p>
					</div>
				</section>

				<section className="w-full bg-slate-50 flex justify-end flex-col gap-10 p-5 md:p-16 text-black rounded-2xl">
					These Terms and Conditions ("Terms") govern your use of
					[insert website name here] (the "Site"). By accessing or
					using the Site, you agree to be bound by these Terms. If you
					do not agree to these Terms, you may not use the Site.
					<h2 className="text-lg font-bold">Use of Site</h2>
					<p>
						You may use the Site only for lawful purposes and in
						accordance with these Terms. You may not use the Site in
						any way that violates any applicable federal, state,
						local, or international law or regulation.
					</p>
					<h2 className="text-lg font-bold">Intellectual Property</h2>
					<div className="flex flex-col gap-3">
						<p>
							The Site and its entire contents, features, and
							functionality (including but not limited to all
							information, software, text, displays, images,
							video, and audio, and the design, selection, and
							arrangement thereof) are owned by us, our licensors,
							or other providers of such material and are
							protected by United States and international
							copyright, trademark, patent, trade secret, and
							other intellectual property or proprietary rights
							laws.
						</p>

						<p>
							You may not copy, reproduce, distribute, modify,
							create derivative works of, publicly display,
							publicly perform, republish, download, store, or
							transmit any of the material on our Site, except as
							follows:
						</p>

						<p>
							Your computer may temporarily store copies of such
							materials in RAM incidental to your accessing and
							viewing those materials. You may store files that
							are automatically cached by your Web browser for
							display enhancement purposes. You may print or
							download one copy of a reasonable number of pages of
							the Site for your own personal, non-commercial use
							and not for further reproduction, publication, or
							distribution. If we provide desktop, mobile, or
							other applications for download, you may download a
							single copy to your computer or mobile device solely
							for your own personal, non-commercial use, provided
							you agree to be bound by our end user license
							agreement for such applications.
						</p>
					</div>
					<h2 className="text-lg font-bold">Prohibited Uses</h2>
					<div className="flex flex-col gap-3">
						<p>
							You may use the Site only for lawful purposes and in
							accordance with these Terms. You agree not to use
							the Site:
						</p>

						<p>
							In any way that violates any applicable federal,
							state, local, or international law or regulation
							(including, without limitation, any laws regarding
							the export of data or software to and from the US or
							other countries). To engage in any other conduct
							that restricts or inhibits anyone's use or enjoyment
							of the Site, or which, as determined by us, may harm
							us or users of the Site or expose them to liability.
							User Contributions
						</p>

						<p>
							The Site may contain message boards, chat rooms,
							personal web pages or profiles, forums, bulletin
							boards, and other interactive features
							(collectively, "Interactive Services") that allow
							users to post, submit, publish, display, or transmit
							to other users or other persons (hereinafter,
							"post") content or materials (collectively, "User
							Contributions") on or through the Site.
						</p>

						<p>
							All User Contributions must comply with these Terms
							and any applicable laws and regulations. We have the
							right to remove any User Contributions that we
							consider to be inappropriate or objectionable.
						</p>
					</div>
					<h2 className="text-lg font-bold">Indemnification</h2>
					<p>
						You agree to defend, indemnify, and hold us harmless,
						our affiliates, licensors, and service providers, and
						our and their respective officers, directors, employees,
						contractors, agents, licensors, suppliers, successors,
						and assigns from and against any claims, liabilities,
						damages, judgments, awards, losses, costs, expenses, or
						fees (including reasonable attorneys' fees) arising out
						of or relating to your violation of these Terms or your
						use of the Site, including, but not limited to, your
						User Contributions, any use of the Site's content,
						services, and products other than as expressly
						authorized in these Terms, or your use of any
						information obtained from the Site.
					</p>
					<h2 className="text-lg font-bold">
						Disclaimer of Warranties
					</h2>
					<p>The Site is provided on an "as is" and "as available</p>
				</section>
			</div>
		</Layout>
	);
}

export default Terms;
