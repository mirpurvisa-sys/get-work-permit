import type { Metadata } from 'next'
import { InnerPageHero } from '@/components/InnerPageHero'
import { LegalSheet } from '@/components/legal/LegalSheet'

export const metadata: Metadata = {
  title: 'Terms & Conditions | GetWorkPermits',
  description:
    'Read the Terms & Conditions of GetWorkPermits. Learn about using our website, services, and applying for international work permits safely and legally.',
}

const sections = [
  {
    title: 'Welcome To GetWorkPermits',
    text: 'By accessing or using GetWorkPermits, you agree to comply with these Terms & Conditions. Please read them carefully before using our website, services, or submitting any applications. If you do not agree, please refrain from using our platform.',
  },
  {
    title: '1. Use Of Our Services',
    text: 'GetWorkPermits provides guidance and support for applying for international work permits. All information on our website is for general guidance only. We do not guarantee approval of any work permit, and users must provide accurate and complete information when using our services.',
  },
  {
    title: '2. User Responsibilities',
    text: 'You agree to use our website and services lawfully and ethically. You are responsible for keeping your login credentials and personal data secure. You must not misuse our services, including submitting false information or attempting to harm the platform.',
  },
  {
    title: '3. Payment & Fees',
    text: 'Any fees for services will be clearly stated before submission. Payments are non-refundable once services are processed, except where required by law. GetWorkPermits reserves the right to change fees at any time, with notice on the website.',
  },
  {
    title: '4. Intellectual Property',
    text: 'All content on GetWorkPermits, including text, graphics, logos, and images, is owned by us or our partners. You may not copy, reproduce, or distribute any content without our written permission.',
  },
  {
    title: '5. Limitation Of Liability',
    text: 'GetWorkPermits is not liable for any loss, damage, or legal issues resulting from using our website or services. We do not guarantee work permit approval, travel outcomes, or employment placement. Users are responsible for complying with the laws and regulations of the destination country.',
  },
  {
    title: '6. Third-Party Links',
    text: 'Our website may include links to third-party websites for additional resources. We are not responsible for the content, privacy policies, or practices of these external sites.',
  },
  {
    title: '7. Governing Law',
    text: "These Terms & Conditions are governed by the laws applicable to the location of GetWorkPermits' operations. Users agree to comply with local laws when accessing the website or using services. Last Updated: [Insert Date].",
  },
]

export default function TermsPage() {
  return (
    <div>
      <InnerPageHero
        eyebrow="Terms & Conditions"
        title="Terms And Conditions Use Of GetWorkPermits Services"
        lead="Learn about using our website, services, and applying for international work permits safely and legally."
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bGVnYWwlMjBjb250cmFjdHxlbnwwfHx8fDE3Njg3NTU3Mjh8MA&ixlib=rb-4.1.0&q=60&w=3000"
      />
      <LegalSheet sections={sections} />
    </div>
  )
}
