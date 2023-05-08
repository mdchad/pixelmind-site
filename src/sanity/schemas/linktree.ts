import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export default defineType({
	name: "linktree",
	title: "Linktree",
	type: "document",
	icon: LinkIcon,

	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "href",
			title: "Link",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
				}),
		}),
		defineField({
			name: "status",
			title: "Status",
			type: "string",
			options: {
				list: [
					{ title: "Active", value: "active" },
					{ title: "Inactive", value: "inactive" },
				],
				layout: "radio",
			},
			initialValue: "active",
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "href",
			media: "image",
			status: "status",
		},
		prepare({ title, subtitle, media, status }) {
			const badge = status === "active" ? "✅" : "❌";

			return {
				title: `${title} - ${badge}`,
				subtitle: `${subtitle}`,
				media,
			};
		},
	},
});
