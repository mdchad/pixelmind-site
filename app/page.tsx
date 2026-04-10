import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import Services from '@/components/landing/Services'
import Projects from '@/components/landing/Projects'
import Contact from '@/components/landing/Contact'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
