import '@/styles/globals.css'
import '@/styles/styles.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Component {...pageProps} />
	)
}
