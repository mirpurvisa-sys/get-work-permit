import type { Metadata } from 'next'
import { CountriesAtlas } from '@/components/countries/CountriesAtlas'

export const metadata: Metadata = {
  title: 'Countries We Serve | GetWorkPermits',
  description:
    'Explore the countries served by GetWorkPermits. Compare destinations, understand regional fit, and review the markets we currently support through our work permit advisory service.',
}

export default function CountriesPage() {
  return <CountriesAtlas />
}
