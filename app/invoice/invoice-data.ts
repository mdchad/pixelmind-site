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

export interface InvoiceParty {
	name: string
	addressLines: string[]
}

export interface InvoiceData {
	invoiceNumber: string
	invoiceDate: string
	dueDate: string
	billingPeriod: { from: string; to: string }
	from: InvoiceParty
	billTo: InvoiceParty
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

export const CURRENCIES = ['RM', 'SGD', 'USD', 'EUR', 'GBP', 'AUD', 'IDR'] as const
export type Currency = (typeof CURRENCIES)[number]

export interface InvoiceInput extends InvoiceDates {
	/** Zero-padded running number, the `0015` in `PMS-0015-20260702`. */
	sequence: string
	/** Single line item, e.g. "AI Audio". */
	service: string
	/** Amount as a plain number string, e.g. "4000" or "4000.50". */
	amount: string
	/** Currency code printed before the amount, e.g. "RM 4000". */
	currency: Currency
	/** Recipient shown under "Bill To". */
	billTo: InvoiceParty
}

export const DEFAULT_SERVICE = 'AI Audio'
export const DEFAULT_AMOUNT = '4000'
export const DEFAULT_CURRENCY: Currency = 'RM'
export const DEFAULT_BILL_TO: InvoiceParty = {
	name: 'ATHAR Foundation',
	addressLines: [
		'30-01 Susur Larkin Perdana 2',
		'Larkin Perdana',
		'80350',
		'Johor Bahru',
	],
}

const SERVICE_MAX = 80
const NAME_MAX = 120
const ADDRESS_LINE_MAX = 120
const ADDRESS_LINES_MAX = 8
const AMOUNT = /^\d{1,9}(\.\d{1,2})?$/

/** Trims and bounds the service label. Returns null when empty or too long. */
export const parseService = (value: string | null | undefined): string | null => {
	const trimmed = value?.trim() ?? ''
	return trimmed.length > 0 && trimmed.length <= SERVICE_MAX ? trimmed : null
}

/** Accepts digits with an optional 2dp fraction; strips a leading currency and thousands separators. */
export const parseAmount = (value: string | null | undefined): string | null => {
	const cleaned = (value ?? '')
		.replace(/^\s*[A-Za-z$€£]+\s*/, '')
		.replaceAll(',', '')
		.trim()
	return AMOUNT.test(cleaned) ? cleaned : null
}

/** Accepts one of `CURRENCIES`, case-insensitively. */
export const parseCurrency = (value: string | null | undefined): Currency | null => {
	const upper = value?.trim().toUpperCase() ?? ''
	return (CURRENCIES as readonly string[]).includes(upper) ? (upper as Currency) : null
}

/** Trims and bounds the recipient name. Returns null when empty or too long. */
export const parseBillToName = (value: string | null | undefined): string | null => {
	const trimmed = value?.trim() ?? ''
	return trimmed.length > 0 && trimmed.length <= NAME_MAX ? trimmed : null
}

/**
 * Splits a multi-line address into trimmed, non-empty lines.
 * Returns null when there are no lines, too many, or any line is too long.
 */
export const parseBillToAddress = (value: string | null | undefined): string[] | null => {
	const lines = (value ?? '')
		.split(/\r?\n/)
		.map((line) => line.trim())
		.filter(Boolean)
	const valid =
		lines.length > 0 &&
		lines.length <= ADDRESS_LINES_MAX &&
		lines.every((line) => line.length <= ADDRESS_LINE_MAX)
	return valid ? lines : null
}

export const formatAmount = (amount: string, currency: Currency): string =>
	`${currency} ${amount}`

/** Builds the invoice. Due date is invoice date + 10 days. */
export const buildInvoice = ({
	sequence,
	service,
	amount,
	currency,
	billTo,
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
	billTo,
	items: [{ service, amount: formatAmount(amount, currency) }],
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
