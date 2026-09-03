import { NextResponse, type NextRequest } from 'next/server'

/**
 * HTTP Basic Auth for the invoice generator.
 * Credentials come from INVOICE_USER / INVOICE_PASSWORD. If either is missing the
 * routes fail closed (503) rather than becoming public.
 */
export const config = {
	matcher: ['/invoice/:path*', '/api/invoice/:path*'],
}

const REALM = 'Pixelmind Invoice'

const unauthorized = () =>
	new NextResponse('Authentication required', {
		status: 401,
		headers: {
			'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
			'Cache-Control': 'no-store',
		},
	})

/** Compares two strings without short-circuiting on the first mismatch. */
const safeEqual = (a: string, b: string): boolean => {
	const enc = new TextEncoder()
	const x = enc.encode(a)
	const y = enc.encode(b)
	let diff = x.length ^ y.length
	for (let i = 0; i < Math.max(x.length, y.length); i++) {
		diff |= (x[i] ?? 0) ^ (y[i] ?? 0)
	}
	return diff === 0
}

const parseBasicAuth = (header: string | null): [string, string] | null => {
	if (!header?.startsWith('Basic ')) return null
	try {
		const decoded = atob(header.slice(6).trim())
		const sep = decoded.indexOf(':')
		if (sep === -1) return null
		return [decoded.slice(0, sep), decoded.slice(sep + 1)]
	} catch {
		return null
	}
}

export function proxy(request: NextRequest) {
	const user = process.env.INVOICE_USER
	const password = process.env.INVOICE_PASSWORD
	if (!user || !password) {
		return new NextResponse('Invoice auth is not configured', { status: 503 })
	}

	const credentials = parseBasicAuth(request.headers.get('authorization'))
	if (!credentials) return unauthorized()

	const [givenUser, givenPassword] = credentials
	// Evaluate both so timing does not reveal which one was wrong.
	const userOk = safeEqual(givenUser, user)
	const passwordOk = safeEqual(givenPassword, password)
	if (!userOk || !passwordOk) return unauthorized()

	const response = NextResponse.next()
	response.headers.set('Cache-Control', 'private, no-store')
	return response
}
