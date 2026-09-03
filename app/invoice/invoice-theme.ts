import { professionalTheme } from '@/lib/pdf-themes/professional'
import type { PdfcnTheme } from '@/types/pdf-themes'

/** Professional theme tightened to match the original Pixelmind invoice layout. */
export const invoiceTheme: PdfcnTheme = {
	...professionalTheme,
	name: 'pixelmind-invoice',
	typography: {
		...professionalTheme.typography,
		body: { ...professionalTheme.typography.body, lineHeight: 1.4 },
		heading: {
			...professionalTheme.typography.heading,
			fontFamily: 'Helvetica',
			fontSize: { ...professionalTheme.typography.heading.fontSize, h2: 20 },
		},
	},

	primitives: {
		...professionalTheme.primitives,
		borderRadius: {
			none: 0,
			sm: 0,
			md: 0,
			lg: 0,
			full: 0
		}
	},
	colors: {
		...professionalTheme.colors,
		muted: '#D0D0D0',
		border: '#777777',
	},
	spacing: {
		...professionalTheme.spacing,
		componentGap: 0,
		paragraphGap: 6,
		sectionGap: 20,
	},
}
