import React from 'react'

function project() {
	return (
		<div className="rounded-xl overflow-hidden flex flex-col gap-5">
			<section className="min-h-[50vh] h-auto w-full bg-slate-50 flex justify-center flex-col gap-16 p-16 text-black rounded-2xl">
				<div className="w-full xl:w-[50%]">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Zebro Magma</h1>
					<p className="text-lg md:text-1xl lg:text-2xl font-light">Mauris ipsum arcu, consectetur at mauris id, facilisis eleifend mauris. In eleifend faucibus malesuada. Nulla facilisi. </p>
				</div>

				<div className="flex flex-col md:flex-row gap-10">
					<div className="flex-1">
						<h2 className="text-gray-400 font-light text-sm mb-[.8em]">Client</h2>
						<p className="text-sm">Converse</p>
					</div>

					<div className="flex-1 desc">
						<h2 className="text-gray-400 font-light text-sm mb-[.8em]">Description</h2>
						<p className="text-sm">
							Mauris ipsum arcu, consectetur at mauris id, facilisis eleifend mauris. In eleifend faucibus malesuada. Nulla facilisi.Mauris ipsum arcu, consectetur at mauris id, facilisis eleifend mauris. In eleifend faucibus malesuada. Nulla facilisi.
							Nam non fringilla lorem. Ut quis dolor lacus. Etiam urna eros, semper id mollis ut, sollicitudin ut sem. Integer ultrices ultrices tortor, id euismod est commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa velit, bibendum non mattis at, sollicitudin ut nibh. Mauris pharetra sed nisl ac scelerisque.</p>
					</div>

					<div className="services">
						<h2 className="text-gray-400 font-light text-sm mb-[.8em]">Services</h2>
						<ul className="text-sm">
							<li>
								Branding
							</li>
							<li>
								Web Design
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* project grid content below */}
		</div>
	)
}

export default project