import type { Metadata } from 'next'

import { PermitGuide } from '@/components/work-permit/PermitGuide'

export const metadata: Metadata = {
  title: 'Work Permit Guide | GetWorkPermits',
  description:
    'Understand what a work permit is, why it matters, and how to move through the process with clearer guidance for international employment planning.',
}

export default function WorkPermitPage() {
  return <PermitGuide />
}
