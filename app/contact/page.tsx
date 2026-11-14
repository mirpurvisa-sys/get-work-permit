import type { Metadata } from 'next'
import { ContactPanel } from '@/components/contact/ContactPanel'

export const metadata: Metadata = {
  title: 'Contact GetWorkPermits | Consultation and Work Permit Guidance',
  description:
    'Contact GetWorkPermits for practical work permit guidance, destination comparison support, and clearer next-step planning before you apply.',
}

export default function ContactPage() {
  return <ContactPanel />
}
