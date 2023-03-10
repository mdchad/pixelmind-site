import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const featuredPost = {
    id: 1,
    title: 'We’re incredibly proud to announce we have secured $75m in Series B',
    href: '#',
    description:
        'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
        name: 'Michael Foster',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
}

const posts = [
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Lindsay Walton',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Lindsay Walton',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Lindsay Walton',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
]

type Props = {
    className?: string
    sm?: number,
    md?: number,
    lg?: number,
    children: React.ReactNode,
}

const Card = ({ className, children, sm, md, lg }: Props) => {
    const column = `col-span-${sm} md:col-span-${md} lg:col-span-${lg}`;
    const classes = className ? className : '';

    return (
        <div className={`w-full bg-slate-50 p-5 rounded-2xl ${classes} ${column}`}>
            {children}
        </div>
    )
}

function blog() {
    return (
        <section className="grid grid-col-4 md:grid-cols-4 lg:grid-cols-3 gap-4">
            <Card className="" sm={4} md={4} lg={1}>
                <div className="text-black flex flex-col flex-1 justify-end h-full gap-10">
                    <div>
                        <h4 className="text-3xl md:text-4xl font-bold">Explore, be curious.</h4>
                        <p className="text-base md:text-lg lg:text-xl font-light">Discover stories, thinking, and expertise from writers on any topic.</p>
                    </div>
                    <Link href="/blogs">
                        View All Posts
                    </Link>
                </div>
            </Card>

            <Card sm={4} md={2} lg={2} className="flex flex-col gap-4">
                <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                    <time dateTime={featuredPost.datetime} className="block text-sm leading-6 text-gray-600">
                        {featuredPost.date}
                    </time>
                    <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {featuredPost.title}
                    </h2>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600">{featuredPost.description}</p>
                    <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                        <div className="flex flex-col">
                            <Link
                                href={`blogs/${featuredPost.id}`}
                                className="text-sm font-semibold leading-6 text-indigo-600"
                                aria-describedby="featured-post"
                            >
                                Continue reading <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>

                        <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8 gap-2 items-center">
                            <Image width={100} height={100} src={featuredPost.author.imageUrl} alt={featuredPost.author.name} className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                            <p className="text-gray-900">{featuredPost.author.name}</p>
                        </div>
                    </div>
                </article>
            </Card>

            {posts.map((post) => (
                <Card key={post.id} sm={4} md={2} lg={1}>
                    <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                        <time dateTime={post.datetime} className="block text-sm leading-6 text-gray-600">
                            {post.date}
                        </time>
                        <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {post.title}
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">{post.description}</p>
                        <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse md:flex-col-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                            <div className="flex">
                                <Link
                                    href={`blogs/${post.id}`}
                                    className="text-sm font-semibold leading-6 text-indigo-600"
                                    aria-describedby="featured-post"
                                >
                                    Continue reading <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                            <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8 gap-2 items-center">
                                <Image width={100} height={100} src={post.author.imageUrl} alt={post.author.name} className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                                <p className="text-gray-900">{post.author.name}</p>
                            </div>
                        </div>
                    </article>
                </Card>
            ))}

        </section>
    )
}

export default blog