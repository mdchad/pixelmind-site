import { Heading } from '@/components/pdf/heading/heading'
import { PdfImage } from '@/components/pdf/pdf-image/pdf-image'
import { Stack } from '@/components/pdf/stack/stack'
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from '@/components/pdf/table/table'
import { Text } from '@/components/pdf/text/text'
import { PdfcnThemeProvider } from '@/components/pdf/theme-provider'
import { Document, Page, View } from '@/lib/pdf-primitives'

import type { InvoiceData } from './invoice-data'
import { invoiceTheme } from './invoice-theme'

/** Keys matched against the `images` passed to takumi's `render()`. */
export const INVOICE_IMAGES = {
	logo: '/logo.png',
	signature: '/signature.png',
} as const

/** Thinner rules and tighter header cells than the grid variant's defaults. */
const table = {
	root: { borderWidth: 0.75 },
	headerRow: { borderBottomWidth: 0.75 },
	cell: { paddingVertical: 2, paddingHorizontal: 4 },
	headerText: { fontSize: 10 },
	/** The outer border already closes the table; drop the last row's own rule. */
	lastRow: { borderBottomWidth: 0 },
}

/**
 * Header label. Kept as a child of `TableCell` (not a wrapper around it) because
 * `TableRow` only passes variant/border props to children whose type is `TableCell`.
 */
const HeaderText = ({ children }: { children: string }) => (
	<Text weight="bold" noMargin style={table.headerText}>
		{children}
	</Text>
)

const ItemText = ({ children }: { children: string }) => (
	<Text noMargin weight="medium" style={table.headerText}>
		{children}
	</Text>
)

const Lines = ({ lines }: { lines: string[] }) => (
	<Stack gap="none">
		{lines.map((line) => (
			<Text key={line} noMargin style={{ fontSize: 10 }}>
				{line}
			</Text>
		))}
	</Stack>
)

const InvoiceBody = ({ data }: { data: InvoiceData }) => (
	<Stack gap="lg">
		{/* Header: sender + logo */}
		<Stack direction="horizontal" justify="between" align="start">
			<Stack gap="sm">
				<Heading level={2} noMargin style={{ fontSize: 14 }}>
					INVOICE
				</Heading>
				<Lines lines={[data.from.name, ...data.from.addressLines]} />
			</Stack>
			<View style={{ borderRadius: 14, overflow: 'hidden' }}>
				<PdfImage src={INVOICE_IMAGES.logo} width={72} height={72} />
			</View>
		</Stack>

		{/* Bill to */}
		<Stack gap="md">
			<Text weight="bold" noMargin>
				Bill To :
			</Text>
			<Lines lines={[data.billTo.name, ...data.billTo.addressLines]} />
		</Stack>

		{/* Invoice meta */}
		<Table variant="grid" style={table.root}>
			<TableHeader>
				<TableRow header style={table.headerRow}>
					<TableCell style={table.cell}>
						<HeaderText>Invoice Date</HeaderText>
					</TableCell>
					<TableCell style={table.cell}>
						<HeaderText>Due Date</HeaderText>
					</TableCell>
					<TableCell style={table.cell}>
						<HeaderText>Invoice Number</HeaderText>
					</TableCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow style={table.lastRow}>
					<TableCell style={table.cell}><ItemText>{data.invoiceDate}</ItemText></TableCell>
					<TableCell style={table.cell}><ItemText>{data.dueDate}</ItemText></TableCell>
					<TableCell style={table.cell}><ItemText>{data.invoiceNumber}</ItemText></TableCell>
				</TableRow>
			</TableBody>
		</Table>

		<Text noMargin style={{ fontSize: 10 }}>
			This invoice is for the billing period {data.billingPeriod.from} to{' '}
			{data.billingPeriod.to}.
		</Text>

		{/* Line items */}
		<Table variant="grid" style={table.root}>
			<TableHeader>
				<TableRow header style={table.headerRow}>
					<TableCell width="57%" style={table.cell}>
						<HeaderText>Services</HeaderText>
					</TableCell>
					<TableCell style={table.cell}>
						<HeaderText>Amount</HeaderText>
					</TableCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.items.map((item, i) => (
					<TableRow
						key={item.service}
						style={i === data.items.length - 1 ? table.lastRow : undefined}
					>
						<TableCell width="57%" style={table.cell}><ItemText>{item.service}</ItemText></TableCell>
						<TableCell style={table.cell}><ItemText>{item.amount}</ItemText></TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>

		{/* Payment + signature */}
		<Stack gap="md">
			<Text noMargin style={{ fontSize: 10 }}>WIRE FUNDS TO THE FOLLOWING ACCOUNT;</Text>
			<Stack direction="horizontal" justify="between" align="end">
				<Stack gap="sm">
					<Lines
						lines={[
							data.bank.accountName,
							data.bank.accountType,
							data.bank.accountNumber,
						]}
					/>
					<Lines
						lines={data.bank.details.map((d) => `${d.label} : ${d.value}`)}
					/>
				</Stack>
				<Stack gap="none" align="start">
					<PdfImage
						src={INVOICE_IMAGES.signature}
						width={100}
						height={116}
						fit="contain"
						style={{ marginBottom: -10, marginLeft: 40 }}
					/>
					<Text noMargin style={{ letterSpacing: 1.5 }}>
						{'.'.repeat(64)}
					</Text>
					<Text noMargin style={table.headerText}>Name: {data.signature.name}</Text>
					<Text noMargin style={table.headerText}>Date : {data.signature.date}</Text>
				</Stack>
			</Stack>
		</Stack>
	</Stack>
)

export const InvoiceDocument = ({ data }: { data: InvoiceData }) => (
	<Document title={`Invoice ${data.invoiceNumber}`}>
		<Page size="A4">
			<PdfcnThemeProvider theme={invoiceTheme}>
				<InvoiceBody data={data} />
			</PdfcnThemeProvider>
		</Page>
	</Document>
)

/** Rendered on every page via takumi's `footer` render option. */
export const InvoiceFooter = ({ data }: { data: InvoiceData }) => (
	<PdfcnThemeProvider theme={invoiceTheme}>
		<Stack gap="none" align="center" style={{ width: '100%' }}>
			<Text style={{ fontSize: 8 }} noMargin>
				{data.footer.company}
			</Text>
			<Text style={{ fontSize: 8 }} noMargin>
				{data.footer.address}
			</Text>
			<Text style={{ fontSize: 8 }} noMargin>
				Tel: {data.footer.phone}
			</Text>
			<Text style={{ fontSize: 8 }} color="#1155cc" decoration="underline" noMargin>
				{data.footer.website}
			</Text>
		</Stack>
	</PdfcnThemeProvider>
)
