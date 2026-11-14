import styles from './AboutReasons.module.css'

const reasons = [
  'Trusted by Thousands Globally',
  'AI Assistance for Fast Guidance',
  'Transparent, Step-by-Step Process',
  'Opportunities in Multiple Countries',
  'Quick Responses to Support Your Career',
]

export function AboutReasons() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.kicker}>Why Choose Us</div>
          <h2>A stronger, more modern way to approach working abroad</h2>
          <p>
            GetWorkPermits is designed to reduce confusion, improve speed,
            and make the path to international employment more structured and reliable.
          </p>
        </div>

        <div className={styles.list}>
          {reasons.map((reason, index) => (
            <article key={reason} className={styles.item}>
              <span className={styles.index}>0{index + 1}</span>
              <strong>{reason}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
