import '@/styles/globals.css'
import '@/styles/styles.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Menu from '@/components/menu'
import Footer from '@/components/footer'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${inter.variable} font-sans relative`}>
            <div className="flex-1 m-5 gap-5 flex flex-col">
                {/* fake black bar */}
                <div className="w-full fixed top-0 left-0 right-0 bg-black z-10">
                    <div className="bigTopLeftRoundInvert"></div>
                    <div className="bg-black h-5"></div>
                </div>

                <Menu />

                <Component {...pageProps} />

                <Footer />
            </div>
        </main>
    )
}
