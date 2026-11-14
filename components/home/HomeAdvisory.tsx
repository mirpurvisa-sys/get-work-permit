import Link from 'next/link'
import styles from './HomeAdvisory.module.css'

const cards = [
  {
    title: 'Explore & Choose',
    text: 'Find the country and work type that fits your career goals.',
    href: '/countries',
  },
  {
    title: 'Apply & Get Guidance',
    text: 'Submit your documents and get expert advice plus AI support.',
    href: '/how-it-works',
  },
  {
    title: 'Approval & Start Work',
    text: 'Once approved, start your overseas career confidently with ongoing support.',
    href: '/work-permit',
  },
]

export function HomeAdvisory() {
  return (
    <section className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.kicker}>Professional Support</div>
        <h2>Start your work abroad journey in 3 steps</h2>
      </div>

      <div className={styles.cards}>
        {cards.map((card, index) => (
          <article key={card.title} className={styles.card}>
            <div className={styles.badge}>0{index + 1}</div>
            <div className={styles.photo} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <Link href={card.href}>Learn More</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
