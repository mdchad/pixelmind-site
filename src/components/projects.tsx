import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const projectsData = [
	{
		id: 1,
		title: 'MyWay',
		description: 'An Islamic education app for students.',
		slug: 'ecommerce-platform'
	},
	{
		id: 2,
		title: 'Lumiq',
		description: 'An investment service app to maximize returns.',
		slug: 'mobile-banking-app'
	},
	{
		id: 3,
		title: 'Meja',
		description: 'Meja is a GUI database for mongoDB.',
		slug: 'healthcare-dashboard'
	},
	{
		id: 4,
		title: 'Wordmaker',
		description: 'Wordpress AI builder to generate themes quickly',
		slug: 'social-media-platform'
	}
]

interface ProjectItemProps {
	title: string
	description: string
	slug: string
}

const ProjectItem = ({ title, description, slug }: ProjectItemProps) => {
	return (
		<div className="mb-8">
			<div className="group block">
				<h1 className="text-gray-900 text-xl md:text-xl font-semibold group-hover:underline">
					<span className="">{title}</span>
					{/*<FiArrowUpRight className="inline-block ml-2 text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />*/}
				</h1>
				<p className="text-gray-500">{description}</p>
			</div>
		</div>
	)
}

function projects() {
	return (
		<div className="bg-slate-50 rounded-2xl py-12 overflow-x-auto">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-5">
					<h2 className="mb-4 text-center text-3xl font-semibold leading-8 text-gray-900">
						Projects
					</h2>
					<p className="text-gray-900 mb-16 text-center">Some of the work we've done for our clients</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
						{projectsData.map((project) => (
							<ProjectItem
								key={project.id}
								title={project.title}
								description={project.description}
								slug={project.slug}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default projects
