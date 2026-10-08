import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Slides',
	description: 'Slides.',
	robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default function SlidesPage() {

	return (
		<div className="max-w-[1200px] mx-auto px-8 py-24 font-mono text-white">
			<Link
				href="/"
				className="text-sm text-[#444] hover:text-white transition-colors mb-12 block"
			>
				← back
			</Link>

			<h1 className="text-2xl mb-2">Slides</h1>
			<p className="text-[#444] text-sm mb-12">Slides that i created</p>
		</div>
	)
}
