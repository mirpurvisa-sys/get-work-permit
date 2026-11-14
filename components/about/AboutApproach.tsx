import styles from './AboutApproach.module.css'

const items = [
  {
    title: 'Expert Guidance',
    text: 'We have a team of visa and work permit specialists familiar with the rules and requirements of multiple countries. From Italy to Japan, our experts help ensure your application is complete and compliant.',
  },
  {
    title: 'AI-Powered Assistance',
    text: 'Our intelligent system provides instant answers, document checks, and guidance so you can move quickly without confusion or delays.',
  },
  {
    title: 'Global Coverage',
    text: 'We serve countries across Europe, Asia, North America, and Oceania, including Italy, Greece, Portugal, Canada, UK, Turkey, Bulgaria, Belarus, New Zealand, Japan, USA, and Poland.',
  },
  {
    title: 'Transparent Process',
    text: 'With GetWorkPermits, you always know what to do next. No hidden fees, no confusing instructions, just clear guidance to help you secure your permit.',
  },
]

export function AboutApproach() {
  return (
    <section className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.kicker}>Our Approach</div>
        <h2>Built around speed, clarity, and confidence</h2>
      </div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.top}>
              <span className={styles.number}>0{index + 1}</span>
              <h3>{item.title}</h3>
            </div>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
