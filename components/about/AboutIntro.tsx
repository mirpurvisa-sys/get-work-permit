import styles from './AboutIntro.module.css'

export function AboutIntro() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.kicker}>Who We Are</div>
          <h2>A modern platform built to simplify working abroad</h2>
        </div>

        <div className={styles.right}>
          <p>
            At GetWorkPermits, we believe that working abroad should be simple,
            transparent, and accessible for everyone. Our platform combines
            expert visa guidance, AI-powered assistance, and fast response support
            to make international employment easy no matter your skills, location,
            or career goals.
          </p>
          <p>
            Whether you are seeking opportunities in Italy, jobs in the UK,
            work in Japan, or work options in New Zealand, GetWorkPermits is
            your trusted partner at every step of your overseas journey.
          </p>
        </div>
      </div>
    </section>
  )
}
