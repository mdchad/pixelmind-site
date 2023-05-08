import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'
// import { PagePreview } from '../page/PagePreview'

export default defineType({
	name: 'projects',
	title: 'Projects',
	type: 'document',
	icon: DocumentTextIcon,

	options: {},

	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			description:
				'This ends up on summary pages, on Google, when people share your post in social media.',
			validation: (Rule) =>
				Rule.max(165).warning('Should be under 200 characters.'),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'This ends up on summary pages, on Google, when people share your post in social media.',
		}),
		defineField({
			name: 'client',
			title: 'Client',
			type: 'string',
		}),
		defineField({
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		}),
	],

	preview: {
		select: {
			title: 'title',
			client: 'client',
			media: 'mainImage',
		},
		prepare(selection) {
			const { client } = selection
			return { ...selection, subtitle: client && `by ${client}` }
		},
	},
})
