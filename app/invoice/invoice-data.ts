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
}

/** Builds the ATHAR Audio invoice. Due date is invoice date + 10 days. */
export const buildAtharAudioInvoice = ({
	sequence,
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
	items: [{ service: 'AI Audio', amount: 'RM 4000' }],
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
