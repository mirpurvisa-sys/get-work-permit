import Link from 'next/link'
import styles from './HomeCTA.module.css'

export function HomeCTA() {
  return (
    <section className={styles.wrap}>
      <div className={styles.panel}>
        <div className={styles.image} />
        <div className={styles.copy}>
          <div className={styles.kicker}>Ready to Work Abroad?</div>
          <h2>Start your international career today with GetWorkPermits</h2>
          <p>
            Our experts are ready to guide you through the process quickly and transparently.
            Let our team help you move forward with speed, clarity, and confidence.
          </p>
          <div className={styles.actions}>
            <Link href="/contact">Get Your Work Permit Now</Link>
            <Link href="/services">View Work Permit Options</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
