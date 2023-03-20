import React, { useEffect, useState } from 'react'
import Blog from '@/components/blog'
import Layout from '@/components/layout'

import { query } from '@components/Studio/PreviewIndexPage'
import { client } from '@root/lib/sanity.client'

async function getPosts() {
    const posts = await client.fetch(query);
    return posts;
}

function Blogs() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
        });
    }, []);

    return (
        <Layout>
            <div className="rounded-xl overflow-hidden flex flex-col gap-5">
                <section className="h-[94vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-16 text-black rounded-2xl">
                    <div className="w-full xl:w-[50%]">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Blogs</h1>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
                            from stunning web designs to captivating graphics and logos,each project reflects our commitment to quality and excellence.
                        </p>
                    </div>
                </section>

                {posts ? <Blog data={posts} /> : <p>Loading posts...</p>}
            </div>
        </Layout>
    )
}

export default Blogs
