import Link from 'next/link'
import styles from './AboutHero.module.css'

export function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>About GetWorkPermits</div>
          <h1>Trusted guidance for your global career</h1>
          <p className={styles.lead}>
            At GetWorkPermits, we believe that working abroad should be simple,
            transparent, and accessible for everyone.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.statement}>
            Our platform combines expert visa guidance, AI-powered assistance,
            and fast response support to make international employment easier
            no matter your skills, location, or career goals.
          </div>

          <div className={styles.actions}>
            <Link href="/services" className={styles.primary}>
              Explore Services
            </Link>
            <Link href="/contact" className={styles.secondary}>
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
