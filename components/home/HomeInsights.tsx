import Link from 'next/link'
import styles from './HomeInsights.module.css'

const guideCards = [
  {
    title: 'Explore Work Permit Options',
    text: 'Find the country where you want to work and discover opportunities that match your career goals.',
    href: '/services',
  },
  {
    title: 'Get Expert Guidance',
    text: 'Submit your application details and documents with support from experts and AI review.',
    href: '/how-it-works',
  },
  {
    title: 'Start Your Career Abroad',
    text: 'Move from approval to overseas employment with continued support throughout the process.',
    href: '/work-permit',
  },
  {
    title: 'Common Work Permit Questions',
    text: 'Learn about processing times, required documents, and legal requirements before you apply.',
    href: '/faq',
  },     
]

const posts = [
  {
    title: 'How to secure a work permit with more confidence',
    text: 'Understand the process, prepare the right documents, and avoid common mistakes that delay approval.',
    href: '/blog',
  },
  {
    title: 'Top countries to explore for global work opportunities',
    text: 'Compare destinations across Europe, Asia, North America, and Oceania to find the right fit.',
    href: '/countries',
  },
  {
    title: 'Why transparent guidance matters during your application',
    text: 'A clearer process helps you move faster and make better decisions at every step.',
    href: '/about',
  },
]

export function HomeInsights() {
  return (
    <section className={styles.wrap}>
      <div className={styles.guidesHead}>
        <div className={styles.kicker}>Career and Process Guidance</div>
        <h2>Get the work permit support you deserve</h2>
      </div>

      <div className={styles.guidesGrid}>
        {guideCards.map((card, index) => (
          <article key={card.title} className={styles.guideCard}>
            <div className={styles.number}>0{index + 1}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <Link href={card.href}>View More</Link>
          </article>
        ))}
      </div>

      <div className={styles.postsHead}>
        <div className={styles.kicker}>Resource Blog</div>
        <h2>Recent updates and expert tips for international work permits</h2>
      </div>

      <div className={styles.postsGrid}>
        {posts.map((post, index) => (
          <article key={post.title} className={styles.post}>
            <div className={styles.postDate}>0{index + 1}</div>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <Link href={post.href}>Read More</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
