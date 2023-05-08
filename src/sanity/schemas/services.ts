import { defineField, defineType } from "sanity";
import { OlistIcon } from "@sanity/icons";

export default defineType({
	name: "services",
	title: "Services",
	type: "document",
	icon: OlistIcon,

	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
	],
});
