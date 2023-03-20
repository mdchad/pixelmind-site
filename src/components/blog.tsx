import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlForImage } from '@root/lib/sanity.image'

type Cards = {
    className?: string
    sm?: number,
    md?: number,
    lg?: number,
    children: React.ReactNode,
}

const Card = ({ className, children, sm, md, lg }: Cards) => {
    const column = `col-span-${sm} md:col-span-${md} lg:col-span-${lg}`;
    const classes = className ? className : '';

    return (
        <div className={`w-full bg-slate-50 p-5 rounded-2xl ${classes} ${column}`}>
            {children}
        </div>
    )
}

export default function Blogs({ data }: any) {

    return (
        <section className="grid grid-col-4 md:grid-cols-4 xl:grid-cols-3 gap-4">
            <Card className="" sm={4} md={2} lg={1}>
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

            {data.map((post: any) => (
                // check if post is featured
                post.featured ? (
                    <Card sm={4} md={2} lg={2} className="flex flex-col gap-4">
                        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                            <div className="relative w-full h-80 drop-shadow-xl">
                                <Image
                                    className='object-cover object-left lg:object-center'
                                    src={urlForImage(post.mainImage).url() as string}
                                    alt={post.mainImage.alt}
                                    fill
                                />
                            </div>

                            <time dateTime={post.publishedAt} className="block text-sm leading-6 text-gray-600">
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </time>

                            <div className='flex gap-2'>
                                {post.categories.map((category: string | any) => (
                                    <span
                                        key={category}
                                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
                                    >
                                        {category?.title}
                                    </span>
                                ))}
                            </div>

                            <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {post.title}
                            </h2>

                            <div className='text-gray-600'>
                                {post.excerpt}
                            </div>

                            <p className="mt-4 text-lg leading-8 text-gray-600">{post.description}</p>
                            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse md:flex-col-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                                <div className="flex">
                                    <Link
                                        href={`blogs/${post.slug.current}`}
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
                ) : (
                    <Card key={post.slug.current} sm={4} md={2} lg={1}>
                        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                            <time dateTime={post.publishedAt} className="block text-sm leading-6 text-gray-600">
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </time>
                            <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {post.title}
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-600">{post.description}</p>
                            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse md:flex-col-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                                <div className="flex">
                                    <Link
                                        href={`blogs/${post.slug.current}`}
                                        className="text-sm font-semibold leading-6 text-indigo-600"
                                        aria-describedby="featured-post"
                                    >
                                        Continue reading <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                                <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8 gap-2 items-center">
                                    <Image width={100} height={100} src={'/' + post.author.image.asset._ref} alt={post.author.name} className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                                    <p className="text-gray-900">{post.author.name}</p>
                                </div>
                            </div>
                        </article>
                    </Card>
                )
            ))}
        </section>
    )
}
