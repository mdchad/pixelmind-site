import {
	DUE_DAYS,
	addDays,
	buildInvoiceNumber,
	formatDate,
	type InvoiceDates,
} from './invoice-dates'

export interface InvoiceLineItem {
	service: string
	amount: string
}

export interface InvoiceData {
	invoiceNumber: string
	invoiceDate: string
	dueDate: string
	billingPeriod: { from: string; to: string }
	from: { name: string; addressLines: string[] }
	billTo: { name: string; addressLines: string[] }
	items: InvoiceLineItem[]
	bank: {
		accountName: string
		accountType: string
		accountNumber: string
		details: { label: string; value: string }[]
	}
	signature: { name: string; date: string }
	footer: { company: string; address: string; phone: string; website: string }
}

export interface InvoiceInput extends InvoiceDates {
	/** Zero-padded running number, the `0015` in `PMS-0015-20260702`. */
	sequence: string
	/** Single line item, e.g. "AI Audio". */
	service: string
	/** Amount in ringgit as a plain number string, e.g. "4000" or "4000.50". */
	amount: string
}

export const DEFAULT_SERVICE = 'AI Audio'
export const DEFAULT_AMOUNT = '4000'
export const CURRENCY = 'RM'

const SERVICE_MAX = 80
const AMOUNT = /^\d{1,9}(\.\d{1,2})?$/

/** Trims and bounds the service label. Returns null when empty or too long. */
export const parseService = (value: string | null | undefined): string | null => {
	const trimmed = value?.trim() ?? ''
	return trimmed.length > 0 && trimmed.length <= SERVICE_MAX ? trimmed : null
}

/** Accepts digits with an optional 2dp fraction; strips a leading currency and thousands separators. */
export const parseAmount = (value: string | null | undefined): string | null => {
	const cleaned = (value ?? '')
		.replace(new RegExp(`^\\s*${CURRENCY}\\s*`, 'i'), '')
		.replaceAll(',', '')
		.trim()
	return AMOUNT.test(cleaned) ? cleaned : null
}

export const formatAmount = (amount: string): string => `${CURRENCY} ${amount}`

/** Builds the ATHAR Audio invoice. Due date is invoice date + 10 days. */
export const buildAtharAudioInvoice = ({
	sequence,
	service,
	amount,
	invoiceDate,
	billingFrom,
	billingTo,
}: InvoiceInput): InvoiceData => ({
	invoiceNumber: buildInvoiceNumber(sequence, invoiceDate),
	invoiceDate: formatDate(invoiceDate, true),
	dueDate: formatDate(addDays(invoiceDate, DUE_DAYS), true),
	billingPeriod: { from: formatDate(billingFrom), to: formatDate(billingTo) },
	from: {
		name: 'Muhammad Irsyad Bin Abd Wahab',
		addressLines: [
			'Eunos Spring,',
			'151 Bedok Reservoir Road',
			'#03 - 1751',
			'Singapore 470151',
		],
	},
	billTo: {
		name: 'ATHAR Foundation',
		addressLines: [
			'30-01 Susur Larkin Perdana 2',
			'Larkin Perdana',
			'80350',
			'Johor Bahru',
		],
	},
	items: [{ service, amount: formatAmount(amount) }],
	bank: {
		accountName: 'Muhammad Irsyad Bin Abd Wahab',
		accountType: 'POSB Savings Account',
		accountNumber: '002751135',
		details: [
			{ label: 'Country', value: 'Singapore' },
			{ label: 'Swift Code', value: 'DBSSSGSG' },
			{ label: 'Bank Code', value: '7171' },
			{ label: 'Branch Code', value: '081' },
			{ label: 'Branch Name', value: 'POSB Bank Ltd.' },
		],
	},
	signature: {
		name: 'Muhammad Irsyad Bin Abd Wahab',
		date: formatDate(invoiceDate),
	},
	footer: {
		company: 'Pixelmind Studio',
		address: 'Eunos Spring 470151',
		phone: '+65 86844625',
		website: 'www.pixelmindstudio.co',
	},
})
