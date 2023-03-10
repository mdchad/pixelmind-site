import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

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
    }
]

type Props = {
    image: string,
    title: string,
    client: string,
    className?: string,
    projId: number
}

const Container = ({ image, title, client, className, projId }: Props) => {
    return (
        <a href={`projects/${projId}`} className={`${className} projects-con`}>
            <div className="project-title-con rounded-tr-2xl">
                <div className="arrow-con">
                    <FiArrowUpRight className="arrow text-2xl" />
                </div>
                <div className="text">
                    <h5 className="font-light">{title}</h5>
                    <p className="font-bold">{client}</p>
                </div>
            </div>
        </a>
    )
}

function projects() {
    return (
        <div className="projects">
            {data.map((item, index) => (
                <Container
                    key={index}
                    image=""
                    title={item.title}
                    client={item.client}
                    className={item.className}
                    projId={item.id}
                />
            ))}
        </div>
    )
}

export default projects