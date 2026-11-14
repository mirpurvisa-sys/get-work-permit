import styles from './AboutWhyChoose.module.css'

const reasons = [
  'Trusted by Thousands Globally',
  'AI Assistance for Fast Guidance',
  'Transparent, Step-by-Step Process',
  'Opportunities in Multiple Countries',
  'Quick Responses to Support Your Career',
]

export function AboutWhyChoose() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.kicker}>Why Choose Us</div>
          <h2>A modern work permit platform designed to support real global career goals</h2>
          <p>
            GetWorkPermits is focused on making overseas work opportunities easier to access through expert direction,
            practical systems, and a process that stays clear from beginning to end.
          </p>
        </div>

        <div className={styles.list}>
          {reasons.map((reason, index) => (
            <article key={reason} className={styles.item}>
              <div className={styles.index}>0{index + 1}</div>
              <div>
                <strong>{reason}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
