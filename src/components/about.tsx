import React from 'react'
import Image from 'next/image';

function About() {
	return (
		<div className="bg-slate-50 rounded-2xl py-12">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-3xl font-semibold leading-8 text-gray-900">
					About Us
				</h2>
				<p className="mb-16 text-gray-600 text-2xl">At <span className="bg-[#5afac5]">Pixelmind</span>, we believe that every pixel holds
					immense potential.
					We are a dynamic and forward-thinking digital agency that harnesses the power of pixels and combines it with the ingenuity of the
					human mind to create <span className="bg-[#5afac5]">extraordinary</span> digital experiences.</p>
				<Image src="/picofme.png"
							 width={200}
							 height={200}
							 alt="Picture of the author"
							 className="mb-4"
				/>
				<p className="text-gray-900 font-semibold">Muhammad Irsyad</p>
				<p className="text-gray-500 font-light">Founder of Pixelmind Studio</p>
			</div>
		</div>
	)
}

export default About
