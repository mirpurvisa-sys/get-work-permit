import Link from 'next/link'
import styles from './HomeAgency.module.css'

export function HomeAgency() {
  return (
    <section className={styles.wrap}>
      <div className={styles.mediaWrap}>
        <div className={styles.media} />
        <div className={styles.play}>Trusted Guidance for Your Global Career</div>
      </div>

      <div className={styles.copy}>
        <div className={styles.kicker}>About Agency</div>
        <h2>Welcome to international work permit advisory services</h2>
        <p className={styles.lead}>
          At GetWorkPermits, we believe that working abroad should be simple, transparent, and accessible for everyone.
          Our platform combines expert visa guidance, AI-powered assistance, and fast response support to make
          international employment easy no matter your skills, location, or career goals.
        </p>
        <p className={styles.text}>
          Whether you are seeking opportunities in Italy, jobs in the UK, work in Japan, or work options in New Zealand,
          GetWorkPermits is your trusted partner at every step of your overseas journey.
        </p>

        <div className={styles.features}>
          <article className={styles.feature}>
            <h3>Our Vision</h3>
            <p>To become the world’s most trusted and recognized platform for international work permits.</p>
          </article>
          <article className={styles.feature}>
            <h3>Our Mission</h3>
            <p>Simplify global employment through expert help, instant AI assistance, and transparent guidance.</p>
          </article>
        </div>

        <div className={styles.ribbon}>
          <div>
            <span>Why Choose Us</span>
            <strong>Trusted by thousands globally with fast guidance, transparent steps, and strong international coverage.</strong>
          </div>
          <Link href="/about">Discover More</Link>
        </div>
      </div>
    </section>
  )
}
