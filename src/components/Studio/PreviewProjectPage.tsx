'use client'

import { usePreview } from '@root/lib/sanity.preview'
import PreviewLayout from "@components/layout_preview"
import Projects from '@/components/projects'
import { allProjects } from '@lib/sanity.queries'

export default function PreviewProjectPage() {
	const getProjects = usePreview(null, allProjects);

	const data = {
		getProjects,
	}

	return (
		<>
			<PreviewLayout>
				<div className="rounded-xl overflow-hidden flex flex-col gap-5">
					<section className="h-[94vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-16 text-black rounded-2xl">
						<div className="w-full xl:w-[50%]">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Projects</h1>
							<p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
								from stunning web designs to captivating graphics and logos,each project reflects our commitment to quality and excellence.
							</p>
						</div>
					</section>

					<Projects projects={data.getProjects} />
				</div>
			</PreviewLayout>
		</>
	)
}
