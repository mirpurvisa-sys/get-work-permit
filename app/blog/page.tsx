import type { Metadata } from 'next'
import { InnerPageHero } from '@/components/InnerPageHero'
import { BlogBoard } from '@/components/blog/BlogBoard'

export const metadata: Metadata = {
  title: 'Work Permit Guides & Tips | GetWorkPermits Blog',
  description:
    'Read expert tips, guides, and updates on work permits, visas, and international employment from GetWorkPermits. Learn how to start your career abroad with ease.',
}

export default function BlogPage() {
  return (
    <div>
      <InnerPageHero
        eyebrow="Blog"
        title="Expert Guides And Tips For International Work Permits"
        lead="At GetWorkPermits, we believe knowledge is power. Our blog provides up-to-date guides, tips, and insights to help you navigate the process of working abroad."
        backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=80"
      />
      <BlogBoard />
    </div>
  )
}
