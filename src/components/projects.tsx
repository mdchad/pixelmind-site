import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Projects } from "@root/typings";
import { HiDotsVertical } from "react-icons/hi";

const data = [
	{
		id: 1,
		image: "",
		title: "Out of Space",
		client: "Adiddas",
		className: "col-span-2 md:col-span-2",
	},
	{
		id: 2,
		image: "",
		title: "Zeboro Magma",
		client: "Converse",
		className: "col-span-2 md:col-span-2 lg:col-span-1",
	},
	{
		id: 3,
		image: "",
		title: "Spring",
		client: "Yellow Pages",
		className: "col-span-2 md:col-span-2 lg:col-span-1",
	},
];

interface ProjectsProps {
	projects: Projects;
	uid: number;
}

const Container = ({ projects, uid }: ProjectsProps) => {
	return (
		// <a href={`projects/${projects._id}`} className={`${className ?? ''} projects-con`}>
		<a
			href={`projects/${projects.slug.current}`}
			className={`projects-con ${
				uid % 3 === 0
					? "col-span-2 md:col-span-2"
					: "col-span-2 md:col-span-2 lg:col-span-1"
			}`}
		>
			<div className="project-title-con rounded-tr-2xl">
				<div className="arrow-con">
					<FiArrowUpRight className="arrow text-2xl" />
				</div>
				<div className="text">
					<h5 className="font-light">{projects.title}</h5>
					<p className="font-bold">{projects.client}</p>
				</div>
			</div>
		</a>
	);
};

function projects({ projects }: { projects: Projects[] }) {
	return (
		<div className="projects">
			{projects.map((item, index) => (
				<Container key={index} projects={item} uid={index} />
			))}
		</div>
	);
}

export default projects;
