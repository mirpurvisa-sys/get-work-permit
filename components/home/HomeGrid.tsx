import styles from './HomeGrid.module.css'

const items = [
  ['Expert visa guidance tailored to your country and profession', 'Get support built around your destination, work type, and application goals.'],
  ['AI-powered assistance for instant answers and document checks', 'Move forward with quicker clarification, smarter checks, and less confusion.'],
  ['Fast response support to help you start your career abroad without delays', 'Stay on track with timely guidance and clearer next-step direction.'],
  ['Transparent process', 'Clear instructions and no hidden fees, designed to make work abroad more accessible for everyone.'],
]

export function HomeGrid() {
  return (
    <section className={styles.wrap}>
      <div className={styles.top}>
        <div>
          <h2 className={styles.heading}>Simplifying Work Abroad</h2>
          <p className={styles.lead}>
            At GetWorkPermits, we are committed to making international employment simple, transparent, and accessible for everyone. Whether you are looking for construction work in Italy, skilled jobs in Japan, teaching roles in the UK, or open work opportunities in New Zealand, we provide structured support that helps you move with confidence.
          </p>
        </div>
        <div className={styles.badge}>
          <span>Expert guidance with faster support</span>
          <strong>AI + Human Help</strong>
        </div>
      </div>

      <div className={styles.grid}>
        {items.map(([title, text]) => (
          <article key={title} className={styles.tile}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
