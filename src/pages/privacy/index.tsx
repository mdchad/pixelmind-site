import HeadMeta from '@/components/head-meta'
import Layout from '@/components/layout'

function Index() {
	return (
		<Layout>
			<HeadMeta
				title='Pixelmind Studio | Privacy Policy'
			/>

			<div className="rounded-xl overflow-hidden flex flex-col gap-5">
				<section className="h-[50vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-5 md:p-16 text-black rounded-2xl">
					<div className="w-full xl:w-[50%]">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Privacy Policy</h1>
						<p>We care about your privacy and want you to understand how we collect, use, and share your personal information.</p>
					</div>
				</section>

				<section className="w-full bg-slate-50 flex justify-end flex-col gap-5 p-5 md:p-16 text-black rounded-2xl">
					<p>This Privacy Policy describes how we collect, use, and disclose your personal information when you use our website [insert website name here] (the "Site"). By using the Site, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.</p>

					<h2 className="text-lg font-bold">Information We Collect</h2>
					<p>We collect information that you provide to us when you use the Site, such as your name, email address, and any other information that you choose to provide. We also collect information automatically when you use the Site, such as your IP address, browser type, and operating system.</p>

					<h2 className="text-lg font-bold">How We Use Your Information</h2>
					<p>We use your information to provide and improve the Site, to communicate with you about the Site and our services, and to personalize your experience on the Site. We may also use your information to comply with legal obligations, enforce our policies, and protect our rights and the rights of others.</p>

					<h2 className="text-lg font-bold">How We Share Your Information</h2>
					<p>We may share your information with third-party service providers who help us operate the Site and provide our services. We may also share your information with our affiliates, business partners, and other third parties for marketing and promotional purposes. We may disclose your information if required by law or if we believe that such disclosure is necessary to protect our rights or the rights of others.</p>

					<h2 className="text-lg font-bold">Your Choices</h2>
					<p>You can choose not to provide certain information to us, but this may limit your ability to use certain features of the Site. You can also opt-out of receiving promotional emails from us by following the instructions in those emails. Please note that even if you opt-out of receiving promotional emails, we may still send you administrative emails related to the Site.</p>

					<h2 className="text-lg font-bold">Security</h2>
					<p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, please be aware that no security measures are perfect or impenetrable.</p>

					<h2 className="text-lg font-bold">Changes to This Privacy Policy</h2>
					<p>We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by email (if we have your email address) or by posting a notice on the Site.</p>

					<h2 className="text-lg font-bold">Contact Us</h2>
					<p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailti:hello@pixelmindstudio.co">hello@pixelmindstudio.co</a>.</p>
				</section>

			</div>
		</Layout>
	)
}

export default Index
