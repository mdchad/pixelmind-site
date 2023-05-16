import React from 'react'
import { Services as ServicesType } from '@root/typings'

type Services = {
	services: ServicesType
}

const Shine = () => {
	return (
		<div className="flex-1 relative isolate overflow-hidden rounded-2xl bg-white/10 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent"></div>
	)
}

function services() {
	return (
		<div className="bg-slate-50 rounded-2xl py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-5">
					<h2 className="mb-8 text-center text-lg font-semibold leading-8 text-gray-900">
						Services
					</h2>
				 	{/*<p className="text-gray-900 text-xl md:text-xl font-light mb-20">Our work spans brand identity, art direction, product design and packaging.</p>*/}
					<div className="gap-10 flex flex-row">
						<div>
							<h1 className="mb-6 text-gray-900 text-xl md:text-xl font-semibold">
								<span className="bg-[#5afac5]">Mobile app development</span>
							</h1>
							<p className="text-gray-600">Unlock the power of mobile with our expert team of developers. We create innovative, user-friendly apps for iOS, Android, and cross-platform solutions that captivate your audience and amplify your brand's presence.</p>
						</div>
						<div>
							<h1 className="mb-6 text-gray-900 text-xl md:text-xl font-semibold">
								<span className="bg-[#5afac5]">Web app development</span>
							</h1>
							<p className="text-gray-600">Streamline your operations and enhance user experiences with our dynamic web applications. Our scalable, secure, and high-performance solutions are tailored to your specific needs, leveraging the latest web technologies.</p>
						</div>
						<div>
							<h1 className="mb-6 text-gray-900 text-xl md:text-xl font-semibold">
								<span className="bg-[#5afac5]">Landing Page</span>
							</h1>
							<p className="text-gray-600">Maximize lead generation and conversions with our optimized landing pages. Our conversion-focused designs and persuasive copywriting create visually compelling pages that align with your brand and drive results.</p>
						</div>
						<div>
							<h1 className="mb-6 text-gray-900 text-xl md:text-xl font-semibold">
								<span className="bg-[#5afac5]">Ecommerce</span>
							</h1>
							<p className="text-gray-600">Thrive in the online retail world with our visually stunning and user-friendly ecommerce websites. We create captivating platforms that showcase your products, streamline shopping experiences, and drive conversions.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default services
