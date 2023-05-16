import Menu from '@/components/menu'
import Footer from '@/components/footer'

import { Inter } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

function layout({ children }: any) {
	return (
		<main className={`${inter.variable} font-sans relative`}>
			<div className="flex-1 m-5 gap-5 flex flex-col">
				{/* fake black bar */}
				<div className="w-full fixed top-0 left-0 right-0 bg-black z-10">
					<div className="bigTopLeftRoundInvert"></div>
					<div className="bg-black h-5"></div>
				</div>

				{/*<Menu />*/}

				{children}

				<Footer />
			</div>
		</main>
	)
}

export default layout
