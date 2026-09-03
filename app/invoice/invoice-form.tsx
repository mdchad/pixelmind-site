'use client'

import { useState } from 'react'

import {
	DUE_DAYS,
	addDays,
	buildInvoiceNumber,
	formatCompact,
	formatDate,
	parseIsoDate,
	parseSequence,
} from './invoice-dates'

interface InvoiceFormProps {
	defaults: {
		sequence: string
		invoiceDate: string
		billingFrom: string
		billingTo: string
	}
}

const field =
	'w-full bg-transparent border border-[#1F1F1F] px-3 py-2 text-sm text-white outline-none focus:border-white transition-colors [color-scheme:dark]'

export function InvoiceForm({ defaults }: InvoiceFormProps) {
	const [sequence, setSequence] = useState(defaults.sequence)
	const [invoiceDate, setInvoiceDate] = useState(defaults.invoiceDate)
	const [billingFrom, setBillingFrom] = useState(defaults.billingFrom)
	const [billingTo, setBillingTo] = useState(defaults.billingTo)

	const parsedInvoice = parseIsoDate(invoiceDate)
	const dueDate = parsedInvoice ? addDays(parsedInvoice, DUE_DAYS) : null
	const from = parseIsoDate(billingFrom)
	const to = parseIsoDate(billingTo)
	const periodInvalid = from && to && from > to
	const parsedSequence = parseSequence(sequence)
	const invoiceNumber =
		parsedSequence && parsedInvoice
			? buildInvoiceNumber(parsedSequence, parsedInvoice)
			: null
	const valid = Boolean(invoiceNumber && from && to && !periodInvalid)

	return (
		<form
			action="/api/invoice"
			method="get"
			target="_blank"
			className="flex flex-col gap-6"
		>
			<fieldset className="flex flex-col gap-2">
				<legend className="text-sm text-[#888] mb-2">Billing period</legend>
				<div className="grid grid-cols-2 gap-3">
					<label className="flex flex-col gap-1 text-xs text-[#444]">
						from
						<input
							type="date"
							name="from"
							value={billingFrom}
							onChange={(e) => setBillingFrom(e.target.value)}
							required
							className={field}
						/>
					</label>
					<label className="flex flex-col gap-1 text-xs text-[#444]">
						to
						<input
							type="date"
							name="to"
							value={billingTo}
							onChange={(e) => setBillingTo(e.target.value)}
							required
							className={field}
						/>
					</label>
				</div>
				{periodInvalid ? (
					<p className="text-xs text-red-400">
						Billing period end must be after the start.
					</p>
				) : null}
			</fieldset>

			<label className="flex flex-col gap-1 text-xs text-[#444]">
				invoice number
				<div className="flex items-center gap-2 text-sm text-[#888]">
					<span>PMS-</span>
					<input
						type="text"
						name="seq"
						inputMode="numeric"
						pattern="\d{1,4}"
						maxLength={4}
						value={sequence}
						onChange={(e) => setSequence(e.target.value.replace(/\D/g, ''))}
						required
						aria-invalid={!parsedSequence}
						className={`${field} w-20 text-center`}
					/>
					<span>-{parsedInvoice ? formatCompact(parsedInvoice) : 'YYYYMMDD'}</span>
				</div>
			</label>

			<div className="grid grid-cols-2 gap-3">
				<label className="flex flex-col gap-1 text-xs text-[#444]">
					invoice date
					<input
						type="date"
						name="invoiceDate"
						value={invoiceDate}
						onChange={(e) => setInvoiceDate(e.target.value)}
						required
						className={field}
					/>
				</label>
				<div className="flex flex-col gap-1 text-xs text-[#444]">
					due date (+{DUE_DAYS} days)
					<output className={`${field} text-[#888]`}>
						{dueDate ? formatDate(dueDate, true) : '—'}
					</output>
				</div>
			</div>

			<button
				type="submit"
				disabled={!valid}
				className="self-start border border-white px-5 py-2 text-sm text-white hover:bg-white hover:text-black transition-colors disabled:opacity-40 disabled:pointer-events-none"
			>
				Generate PDF →
			</button>

			{invoiceNumber && from && to ? (
				<p className="text-xs text-[#444]">
					Invoice {invoiceNumber} · period {formatDate(from)} to {formatDate(to)}
				</p>
			) : null}
		</form>
	)
}
