import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
// import { PagePreview } from '../page/PagePreview'

export default defineType({
	name: "post",
	title: "Post",
	type: "document",
	icon: DocumentTextIcon,

	options: {},

	groups: [
		{
			name: "content",
			title: "Content",
		},
		{
			name: "meta",
			title: "Meta",
		},
	],

	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) =>
				Rule.max(60).warning("Should be under 60 characters."),
			group: ["content", "meta"],
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			group: "meta",
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			description:
				"This ends up on summary pages, on Google, when people share your post in social media.",
			validation: (Rule) =>
				Rule.max(155).warning("Should be under 155 characters."),
			group: "meta",
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author" },
			group: "content",
		}),
		defineField({
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "slug",
					title: "Alt Text",
					description: "Important for SEO and accessibility",
					options: {
						isHighlighted: true,
						// the source should be the same as the image name
						source: "title",
					},
				},
			],
			group: ["content", "meta"],
		}),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
			group: "content",
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
			group: "content",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
			group: "content",
		}),
		defineField({
			name: "featured",
			title: "Featured",
			type: "boolean",
			initialValue: false,
			group: "content",
		}),
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
});
