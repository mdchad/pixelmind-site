import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'
import StudioNavbar from '@/components/Studio/StudioNavbar'
import Logo from '@/components/Studio/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string


export default defineConfig({
	name: 'PIXELMIND_STUDIO',
	title: 'Pixelmind Studio',

	projectId,
	dataset,
	basePath: '/studio',

	plugins: [deskTool(), visionTool()],

	studio: {
		components: {
			logo: Logo,
			navbar: StudioNavbar,
		},
	},

	schema: {
		types: schemaTypes,
	},
})
