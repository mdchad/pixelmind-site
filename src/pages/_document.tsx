import { Html, Head, Main, NextScript } from 'next/document'
import { GeistSans } from 'geist/font/sans'


export default function Document() {
	return (
		<Html lang="en" className={`${GeistSans.variable}`}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
