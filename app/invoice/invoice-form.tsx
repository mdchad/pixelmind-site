'use client'

import { useEffect, useState } from 'react'

import {
	CURRENCY,
	formatAmount,
	parseAmount,
	parseService,
} from './invoice-data'
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
		service: string
		amount: string
		invoiceDate: string
		billingFrom: string
		billingTo: string
	}
}

const PREVIEW_DEBOUNCE_MS = 400

/** Waits until `value` has been stable for `delay` ms before exposing it. */
const useDebounced = <T,>(value: T, delay: number): T => {
	const [debounced, setDebounced] = useState(value)
	useEffect(() => {
		const timer = setTimeout(() => setDebounced(value), delay)
		return () => clearTimeout(timer)
	}, [value, delay])
	return debounced
}

const field =
	'w-full bg-transparent border border-[#1F1F1F] px-3 py-2 text-sm text-white outline-none focus:border-white transition-colors [color-scheme:dark]'

export function InvoiceForm({ defaults }: InvoiceFormProps) {
	const [sequence, setSequence] = useState(defaults.sequence)
	const [service, setService] = useState(defaults.service)
	const [amount, setAmount] = useState(defaults.amount)
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
	const parsedService = parseService(service)
	const parsedAmount = parseAmount(amount)
	const valid = Boolean(
		invoiceNumber &&
		parsedService &&
		parsedAmount &&
		from &&
		to &&
		!periodInvalid,
	)

	// Same URL the Generate button opens, rebuilt from state for the live preview.
	const previewUrl = valid
		? `/api/invoice?${new URLSearchParams({
				seq: parsedSequence!,
				service: parsedService!,
				amount: parsedAmount!,
				invoiceDate,
				from: billingFrom,
				to: billingTo,
			})}`
		: null
	const debouncedUrl = useDebounced(previewUrl, PREVIEW_DEBOUNCE_MS)
	// Keep showing the last good preview while the form is mid-edit or invalid.
	const [shownUrl, setShownUrl] = useState<string | null>(null)
	useEffect(() => {
		if (debouncedUrl) setShownUrl(debouncedUrl)
	}, [debouncedUrl])
	const previewStale = previewUrl !== shownUrl

	return (
		<div className="grid gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:items-start">
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
						<span>
							-{parsedInvoice ? formatCompact(parsedInvoice) : 'YYYYMMDD'}
						</span>
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

				<div className="grid grid-cols-[1fr_160px] gap-3">
					<label className="flex flex-col gap-1 text-xs text-[#444]">
						service
						<input
							type="text"
							name="service"
							value={service}
							onChange={(e) => setService(e.target.value)}
							maxLength={80}
							required
							aria-invalid={!parsedService}
							className={field}
						/>
					</label>
					<label className="flex flex-col gap-1 text-xs text-[#444]">
						amount ({CURRENCY})
						<input
							type="text"
							name="amount"
							inputMode="decimal"
							value={amount}
							onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ''))}
							required
							aria-invalid={!parsedAmount}
							className={field}
						/>
					</label>
				</div>

				<button
					type="submit"
					disabled={!valid}
					className="self-start border border-white px-5 py-2 text-sm text-white hover:bg-white hover:text-black transition-colors disabled:opacity-40 disabled:pointer-events-none"
				>
					Generate PDF →
				</button>

				{invoiceNumber && parsedService && parsedAmount && from && to ? (
					<p className="text-xs text-[#444]">
						Invoice {invoiceNumber} · {parsedService} ·{' '}
						{formatAmount(parsedAmount)} · period {formatDate(from)} to{' '}
						{formatDate(to)}
					</p>
				) : null}
			</form>

			<aside className="flex flex-col gap-2 lg:sticky lg:top-8">
				<div className="flex items-center justify-between text-xs text-[#444]">
					<span>preview</span>
					<span aria-live="polite">
						{!valid
							? 'fix the form to update'
							: previewStale
								? 'updating…'
								: ''}
					</span>
				</div>
				<div
					className={`aspect-[210/297] w-full border border-[#1F1F1F] bg-[#111] transition-opacity ${
						previewStale ? 'opacity-60' : 'opacity-100'
					}`}
				>
					{shownUrl ? (
						<iframe
							key={shownUrl}
							src={`${shownUrl}#toolbar=0&navpanes=0&view=Fit`}
							title="Invoice preview"
							className="h-full w-full bg-white"
						/>
					) : null}
				</div>
			</aside>
		</div>
	)
}
