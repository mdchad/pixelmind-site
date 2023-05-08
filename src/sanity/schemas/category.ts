import { defineField, defineType } from "sanity";
import { DragHandleIcon } from "@sanity/icons";
export default defineType({
	name: "category",
	title: "Category",
	type: "document",
	icon: DragHandleIcon,

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
