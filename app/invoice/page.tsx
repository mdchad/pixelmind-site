import type { Metadata } from 'next'
import Link from 'next/link'

import { DEFAULT_SEQUENCE, defaultInvoiceDates, toIsoDate } from './invoice-dates'
import { InvoiceForm } from './invoice-form'

export const metadata: Metadata = {
	title: 'Invoice',
	description: 'Invoice generator for Pixelmind Studio.',
	robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default function InvoicePage() {
	const dates = defaultInvoiceDates()

	return (
		<div className="max-w-[720px] mx-auto px-8 py-24 font-mono text-white">
			<Link
				href="/"
				className="text-sm text-[#444] hover:text-white transition-colors mb-12 block"
			>
				← back
			</Link>

			<h1 className="text-2xl mb-2">Invoice</h1>
			<p className="text-[#444] text-sm mb-12">
				ATHAR Foundation · AI Audio · RM 4000
			</p>

			<InvoiceForm
				defaults={{
					sequence: DEFAULT_SEQUENCE,
					invoiceDate: toIsoDate(dates.invoiceDate),
					billingFrom: toIsoDate(dates.billingFrom),
					billingTo: toIsoDate(dates.billingTo),
				}}
			/>
		</div>
	)
}
