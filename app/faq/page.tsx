import type { Metadata } from 'next'
import { InnerPageHero } from '@/components/InnerPageHero'
import { FaqList } from '@/components/faq/FaqList'

export const metadata: Metadata = {
  title: 'Work Permit FAQs | GetWorkPermits',
  description:
    'Find answers to common questions about international work permits, visas, and overseas employment. Get clear guidance from GetWorkPermits experts.',
}

export default function FaqPage() {
  return (
    <div>
      <InnerPageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions About Work Permits"
        lead="At GetWorkPermits, we understand that applying for a work permit can be confusing. Here, we answer the most common questions about international employment, visa guidance, and the application process."
        backgroundImage="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y3VzdG9tZXIlMjBzdXBwb3J0JTIwaGVhZHNldHxlbnwwfHx8fDE3Njg3NTU4NDB8MA&ixlib=rb-4.1.0&q=60&w=3000"
      />
      <FaqList />
    </div>
  )
}
