import Link from 'next/link'
import React from 'react'

function footer() {
	const year = new Date().getFullYear()

	return (
		<footer id="footer">
			<div className="w-full bg-slate-50 flex flex-col lg:flex-row justify-between gap-12 p-5 md:p-16 text-black rounded-2xl">
				<div className="flex-1">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
						Pixelmind Studio
					</h1>
					<p className="text-2xl md:text-3xl lg:text-2xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
						Let's get in touch
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-10">
					{/* <div className="flex-1">
                        <address>
                           Singapore
                        </address>
                        <a href="#">Map</a>
                    </div> */}

					<div className="flex-1 flex flex-col gap-5">
						<div className="flex flex-col">
							<a
								href="mailto:hello@pixelmind.co"
								className="hover:text-gray-700"
							>
								irsyad.muhd@gmail.com
							</a>
							{/* <a href="tel:#">+1 (123) 456 7890</a> */}
						</div>

						<div className="flex flex-col">
							<a
								href="https://instagram.com/pixelmind.studio"
								target="_blank"
								className="hover:text-gray-700"
							>
								Instagram
							</a>
							<a
								href="https://twitter.com/pixelmind.studio"
								target="_blank"
								className="hover:text-gray-700"
							>
								Twitter
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-between gap-5 pt-3">
				<div className="flex items-center justify-center">
					<p className="text-sm text-gray-400">
						©Pixelmind Studio {year ?? ''}
					</p>
				</div>

				<div className="">
					<ul className="flex gap-4">
						<li className="text-sm text-gray-400">
							<Link href="/privacy"> Privacy Policy </Link>
						</li>
						<li className="text-sm text-gray-400">
							<Link href="/terms"> Terms & Condition </Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default footer
