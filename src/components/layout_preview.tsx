import Menu from '@/components/menu'
import Footer from '@/components/footer'

import Link from 'next/link'

function layout({ children }: any) {
	return (
		<main className={`font-sans relative`}>
			<div className="fixed top-0 left-0 p-2 bg-black z-50 w-full flex justify-between">
				<p className="text-sm font-sans text-green-500 flex items-center gap-2">
					<span className="block bg-green-500 w-2 h-2 rounded-full"></span>
					<span>Preview Mode</span>
				</p>
				<p className="text-sm font-sans hover:text-gray-500">
					<Link href="/api/exit-preview">Exit Preview Mode</Link>
				</p>
			</div>

			<div className="flex-1 m-5 gap-5 flex flex-col">
				{/* fake black bar */}
				<div className="w-full fixed top-0 left-0 right-0 bg-black z-10">
					<div className="bigTopLeftRoundInvert"></div>
					<div className="bg-black h-5"></div>
				</div>

				<Menu />

				{children}

				<Footer />
			</div>
		</main>
	)
}

export default layout
