import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Pixelmind Studio.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicy() {
  return (
    <div className="max-w-[720px] mx-auto px-8 py-24 font-mono text-white">
      <Link href="/" className="text-sm text-[#444] hover:text-white transition-colors mb-12 block">
        ← back
      </Link>

      <h1 className="text-2xl mb-2">Privacy Policy</h1>
      <p className="text-[#444] text-sm mb-12">Last updated: {new Date().getFullYear()}</p>

      <section className="mb-8">
        <h2 className="text-base mb-3">Information We Collect</h2>
        <p className="text-[#888] text-sm leading-relaxed">
          When you submit the contact form on our website, we collect your name, email address, and message content. We use this information solely to respond to your inquiry.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base mb-3">How We Use Your Information</h2>
        <p className="text-[#888] text-sm leading-relaxed">
          We use the information you provide to respond to your inquiry and communicate with you about potential projects. We do not sell, trade, or share your personal information with third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base mb-3">Data Retention</h2>
        <p className="text-[#888] text-sm leading-relaxed">
          We retain your contact information only as long as necessary to fulfill the purpose for which it was collected or as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base mb-3">Third-Party Services</h2>
        <p className="text-[#888] text-sm leading-relaxed">
          Our website is hosted on Vercel. Contact form submissions are processed via Resend. These services have their own privacy policies governing the handling of your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base mb-3">Contact</h2>
        <p className="text-[#888] text-sm leading-relaxed">
          For any privacy-related questions, contact us at{' '}
          <a href="mailto:hello@pixelmindstudio.co" className="text-white hover:underline">
            hello@pixelmindstudio.co
          </a>
        </p>
      </section>
    </div>
  )
}
