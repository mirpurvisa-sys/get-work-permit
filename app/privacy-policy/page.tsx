import type { Metadata } from 'next'
import { InnerPageHero } from '@/components/InnerPageHero'
import { LegalSheet } from '@/components/legal/LegalSheet'

export const metadata: Metadata = {
  title: 'Privacy Policy | GetWorkPermits',
  description:
    "Read GetWorkPermits' Privacy Policy to learn how we collect, use, and protect your personal information while helping you secure international work permits.",
}

const sections = [
  {
    title: 'Your Privacy Matters',
    text: 'At GetWorkPermits, your privacy is our priority. We are committed to protecting the personal information you provide when using our website, services, and applications. This Privacy Policy explains what data we collect, how we use it, and the measures we take to keep it secure. By using GetWorkPermits, you agree to the terms outlined in this policy.',
  },
  {
    title: '1. Information We Collect',
    text: 'We may collect personal information such as your name, email address, phone number, country of interest, and application details. We may also collect technical information such as IP address, browser type, device information, and usage data. Cookies and similar technologies may be used to improve user experience, analyze traffic, and provide personalized content.',
  },
  {
    title: '2. How We Use Your Information',
    text: 'Your information may be used to provide and improve our services, respond to inquiries and applications, personalize your experience, send updates and newsletters where you opt in, and comply with legal requirements while protecting against fraud or abuse.',
  },
  {
    title: '3. Sharing Your Information',
    text: 'We respect your privacy and do not sell your personal information. Your data may be shared only with trusted partners who assist in providing services, to comply with legal obligations or protect our rights, or in the event of a merger, acquisition, or sale of assets under strict confidentiality.',
  },
  {
    title: '4. Cookies And Tracking',
    text: 'We use cookies to remember preferences and site settings, analyze traffic and website usage, and deliver personalized content and offers. You can disable cookies in your browser, but some features may not work properly.',
  },
  {
    title: '5. Data Security',
    text: 'We implement industry-standard measures to protect your data from unauthorized access, alteration, disclosure, or destruction. While no method is completely secure, we continually update our systems to safeguard your information.',
  },
  {
    title: '6. Your Rights',
    text: 'Depending on your location, you may have the right to access the personal data we hold about you, correct or update your information, request deletion of your data, and opt out of marketing communications. To exercise your rights, please contact support@getworkpermits.com.',
  },
  {
    title: '7. Third-Party Links',
    text: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before sharing personal information.',
  },
  {
    title: "8. Children's Privacy",
    text: 'GetWorkPermits does not knowingly collect personal information from children under 13, or under the minimum legal age in your country. If we discover such information has been collected, we will promptly delete it.',
  },
  {
    title: '9. Updates To This Policy',
    text: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with the date of the latest revision. We encourage you to review this policy periodically. Last Updated: [Insert Date].',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div>
      <InnerPageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy How We Protect Your Information"
        lead="Read how GetWorkPermits collects, uses, and protects your personal information while helping you secure international work permits."
        backgroundImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1800&q=80"
      />
      <LegalSheet sections={sections} />
    </div>
  )
}
