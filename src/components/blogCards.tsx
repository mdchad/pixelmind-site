import Image from "next/image";
import { urlForImage } from "@root/lib/sanity.image";
import { Post, Cards } from "@root/typings";
import Link from "next/link";

interface Props {
	post: Post;
	sm: Cards["sm"];
	md: Cards["md"];
	lg: Cards["lg"];
}

const Card = ({ className, children, sm, md, lg }: Cards) => {
	const column = `col-span-${sm} md:col-span-${md} lg:col-span-${lg}`;
	const classes = className ? className : "";

	return (
		<div
			className={`w-full bg-slate-50 overflow-hidden rounded-2xl flex ${classes} ${column}`}
		>
			{children}
		</div>
	);
};

export const blogCards = ({ post, sm, md, lg }: Props) => {
	return (
		<Card sm={sm} md={md} lg={lg}>
			<article className="mx-auto w-full flex flex-col gap-4 relative">
				{/* {post.mainImage && (
					<div className="w-full h-100% relative z-1">
						<Image
							className=''
							src={urlForImage(post.mainImage).url()}
							alt={post.mainImage.alt ? post.mainImage.alt.current : post.title}
							fill
						/>
					</div>
				)} */}

				<div
					className="min-h-full bg-cover w-full bg-no-repeat bg-center"
					style={{
						backgroundImage: `url(${urlForImage(
							post.mainImage
						).url()})`,
					}}
				>
					<div className="h-full flex flex-col p-5">
						{post._createdAt && (
							<time
								dateTime={post._createdAt}
								className="block text-sm leading-6 text-gray-100"
							>
								{new Date(post._createdAt).toLocaleDateString(
									"en-US",
									{
										day: "numeric",
										month: "long",
										year: "numeric",
									}
								)}
							</time>
						)}

						{post.categories && (
							<div className="flex gap-2">
								{post.categories.map(
									(category: string | any) => (
										<span
											key={category?.title}
											className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
										>
											{category?.title}
										</span>
									)
								)}
							</div>
						)}

						{post.title && (
							<h2
								id="featured-post"
								className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
							>
								{post.title}
							</h2>
						)}

						{post.excerpt && (
							<p className="mt-4 text-lg leading-8 text-white">
								{post.excerpt}
							</p>
						)}

						<div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse md:flex-col-reverse sm:gap-8 lg:mt-4 lg:flex-col">
							{post.slug && (
								<div className="flex">
									<Link
										href={`blogs/${post.slug.current}`}
										className="text-sm font-semibold leading-6 text-black hover:text-gray-700"
										aria-describedby="featured-post"
									>
										Continue reading{" "}
										<span aria-hidden="true">&rarr;</span>
									</Link>
								</div>
							)}

							{post.author && (
								<div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8 gap-2 items-center">
									<Image
										width={100}
										height={100}
										src={urlForImage(
											post.author.image
										).url()}
										alt={post.author.name || "Author"}
										className="h-6 w-6 flex-none rounded-full bg-gray-50"
									/>
									<p className="text-gray-900">
										{post.author.name}
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</article>
		</Card>
	);
};

export default blogCards;
