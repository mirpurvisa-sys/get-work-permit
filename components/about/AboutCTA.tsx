import Link from 'next/link'
import styles from './AboutCTA.module.css'

export function AboutCTA() {
  return (
    <section className={styles.wrap}>
      <div className={styles.panel}>
        <div className={styles.left}>
          <div className={styles.kicker}>Start Your Work Abroad Journey Today</div>
          <h2>Ready to work abroad?</h2>
          <p>
            Let our experts guide you through the process with speed,
            clarity, and confidence.
          </p>
        </div>

        <div className={styles.right}>
          <Link href="/services" className={styles.primary}>
            Get Your Work Permit Now
          </Link>
          <Link href="/contact" className={styles.secondary}>
            Talk to Our Experts
          </Link>
        </div>
      </div>
    </section>
  )
}
