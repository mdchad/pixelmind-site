export const DUE_DAYS = 10

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

/** Parses a `YYYY-MM-DD` string as a UTC date. Returns null when invalid. */
export const parseIsoDate = (value: string | null | undefined): Date | null => {
	if (!value || !ISO_DATE.test(value)) return null
	const date = new Date(`${value}T00:00:00Z`)
	return Number.isNaN(date.getTime()) ? null : date
}

export const toIsoDate = (date: Date): string => date.toISOString().slice(0, 10)

export const addDays = (date: Date, days: number): Date => {
	const next = new Date(date)
	next.setUTCDate(next.getUTCDate() + days)
	return next
}

const pad = (n: number) => String(n).padStart(2, '0')

/** `DD/MM/YYYY`, or `DD / MM / YYYY` when `spaced` (matches the invoice table). */
export const formatDate = (date: Date, spaced = false): string => {
	const parts = [
		pad(date.getUTCDate()),
		pad(date.getUTCMonth() + 1),
		String(date.getUTCFullYear()),
	]
	return parts.join(spaced ? ' / ' : '/')
}

/** `YYYYMMDD`, used as the invoice number suffix. */
export const formatCompact = (date: Date): string =>
	`${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}`

export interface InvoiceDates {
	invoiceDate: Date
	billingFrom: Date
	billingTo: Date
}

/** Today as the invoice date, previous calendar month as the billing period. */
export const defaultInvoiceDates = (now = new Date()): InvoiceDates => {
	const y = now.getUTCFullYear()
	const m = now.getUTCMonth()
	return {
		invoiceDate: new Date(Date.UTC(y, m, now.getUTCDate())),
		billingFrom: new Date(Date.UTC(y, m - 1, 1)),
		billingTo: new Date(Date.UTC(y, m, 0)),
	}
}

export const DEFAULT_SEQUENCE = '0015'
const SEQUENCE = /^\d{1,4}$/

/** Normalises the invoice sequence (`15` → `0015`). Returns null when invalid. */
export const parseSequence = (value: string | null | undefined): string | null =>
	value && SEQUENCE.test(value.trim()) ? value.trim().padStart(4, '0') : null

export const buildInvoiceNumber = (sequence: string, invoiceDate: Date): string =>
	`PMS-${sequence}-${formatCompact(invoiceDate)}`
