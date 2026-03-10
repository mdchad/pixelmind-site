import Link from 'next/link'
import Hero from '@/components/landing/Hero'
import Services from '@/components/landing/Services'
import Projects from '@/components/landing/Projects'
import Contact from '@/components/landing/Contact'

export default function Home() {
  return (
    <div className="container max-w-[1200px] mx-auto px-8 py-16">
      <Hero />
      <Services />
      <Projects />
      <Contact />

      <footer className="text-center text-white/50 font-mono text-sm mt-12 flex flex-col gap-2 items-center">
        <span>PIXELMIND STUDIO © {new Date().getFullYear()}. SYSTEM OPERATIONAL.</span>
        <Link href="/privacy" className="hover:text-white transition-colors text-xs">
          privacy policy
        </Link>
      </footer>
    </div>
  )
}
