import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { render } from 'takumi-pdf/next'

import {
	DEFAULT_AMOUNT,
	DEFAULT_SERVICE,
	buildAtharAudioInvoice,
	parseAmount,
	parseService,
} from '@/app/invoice/invoice-data'
import {
	DEFAULT_SEQUENCE,
	defaultInvoiceDates,
	parseIsoDate,
	parseSequence,
} from '@/app/invoice/invoice-dates'
import {
	INVOICE_IMAGES,
	InvoiceDocument,
	InvoiceFooter,
} from '@/app/invoice/invoice-document'

/**
 * GET /api/invoice?seq=0015&service=AI%20Audio&amount=4000&invoiceDate=YYYY-MM-DD&from=YYYY-MM-DD&to=YYYY-MM-DD
 * Missing params fall back to sequence 0015, today, and the previous month. Due date is invoiceDate + 10 days.
 */
export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)
	const defaults = defaultInvoiceDates()

	const invalid = ['invoiceDate', 'from', 'to'].filter(
		(key) => searchParams.has(key) && !parseIsoDate(searchParams.get(key))
	)
	if (invalid.length) {
		return new Response(`Invalid date for: ${invalid.join(', ')} (expected YYYY-MM-DD)`, {
			status: 400,
		})
	}

	const seqParam = searchParams.get('seq')
	const sequence = seqParam === null ? DEFAULT_SEQUENCE : parseSequence(seqParam)
	if (!sequence) {
		return new Response('Invalid seq (expected 1 to 4 digits)', { status: 400 })
	}

	const serviceParam = searchParams.get('service')
	const service = serviceParam === null ? DEFAULT_SERVICE : parseService(serviceParam)
	if (!service) {
		return new Response('Invalid service (expected 1 to 80 characters)', { status: 400 })
	}

	const amountParam = searchParams.get('amount')
	const amount = amountParam === null ? DEFAULT_AMOUNT : parseAmount(amountParam)
	if (!amount) {
		return new Response('Invalid amount (expected a number like 4000 or 4000.50)', {
			status: 400,
		})
	}

	const billingFrom = parseIsoDate(searchParams.get('from')) ?? defaults.billingFrom
	const billingTo = parseIsoDate(searchParams.get('to')) ?? defaults.billingTo
	if (billingFrom > billingTo) {
		return new Response('Billing period end must be after the start', { status: 400 })
	}

	const data = buildAtharAudioInvoice({
		sequence,
		service,
		amount,
		invoiceDate: parseIsoDate(searchParams.get('invoiceDate')) ?? defaults.invoiceDate,
		billingFrom,
		billingTo,
	})

	try {
		const [logo, signature] = await Promise.all([
			readFile(path.join(process.cwd(), 'public/logo.png')),
			readFile(path.join(process.cwd(), 'app/invoice/assets/signature.png')),
		])

		const pdf = await render(<InvoiceDocument data={data} />, {
			size: 'a4',
			margin: { top: 84, right: 96, bottom: 110, left: 96 },
			footer: <InvoiceFooter data={data} />,
			images: [
				{ src: INVOICE_IMAGES.logo, data: logo },
				{ src: INVOICE_IMAGES.signature, data: signature },
			],
			metadata: { title: `Invoice ${data.invoiceNumber}` },
		})

		return new Response(Buffer.from(pdf), {
			headers: {
				'Cache-Control': 'no-store',
				'Content-Type': 'application/pdf',
				'Content-Disposition': `inline; filename="${data.invoiceNumber}.pdf"`,
			},
		})
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Render failed'
		return new Response(message, { status: 500 })
	}
}
