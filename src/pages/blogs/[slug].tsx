import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout'

import { client } from '@root/lib/sanity.client'
import { groq } from 'next-sanity';

type Props = {
	params: {
		slug: string;
	};
};

async function Post({ params: { slug } }: Props) {
	console.log(slug)

	return <div>Hello World</div>
}

export default Post;
