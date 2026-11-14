import type { Metadata } from 'next'

import { ServicesShowcase } from '@/components/services/ServicesShowcase'

export const metadata: Metadata = {
  title: 'Work Permit Services by Country | GetWorkPermits',
  description:
    'Explore GetWorkPermits work permit services by country. Compare destinations, understand route focus, and get clearer guidance for international employment planning.',
}

export default function ServicesPage() {
  return <ServicesShowcase />
}
