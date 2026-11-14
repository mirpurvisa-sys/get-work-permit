import type { Metadata } from 'next'
import { HowTimeline } from '@/components/how-it-works/HowTimeline'

export const metadata: Metadata = {
  title: 'Our Process | Clear Work Permit Process Guidance',
  description:
    'See how GetWorkPermits helps applicants compare routes, prepare documents, and move through the work permit process with more clarity.',
}

export default function HowItWorksPage() {
  return <HowTimeline />
}
