import Link from 'next/link'
import styles from './HomeCountries.module.css'

const countries = [
  ['Italy', 'Rich culture, strong economy, and great opportunities for international workers.'],
  ['Greece', 'Mediterranean lifestyle and global employment possibilities.'],
  ['Portugal', 'A stable European country with a welcoming environment and quality of life.'],
  ['Canada', 'A multicultural society with structured opportunities across sectors.'],
  ['United Kingdom', 'A hub for business, technology, and education.'],
  ['Turkey', 'A growing bridge between Europe and Asia for global workers.'],
  ['Bulgaria', 'An emerging European market with growing opportunities.'],
  ['Belarus', 'Industrial and technical sectors with developing work possibilities.'],
  ['New Zealand', 'Natural beauty, stability, and a welcoming work culture.'],
  ['Japan', 'Advanced industries with strong demand for skilled professionals.'],
  ['United States', 'A diverse economy with opportunities across many industries.'],
  ['Poland', 'A growing economy with modern infrastructure and rising demand.'],
]

export function HomeCountries() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>Choose Country</div>
          <h2>Explore work permits by country</h2>
          <p>
            Choose your destination and discover the work opportunities available.
            We guide you through every step of the process.
          </p>
        </div>

        <div className={styles.grid}>
          {countries.map(([country, text]) => (
            <article key={country} className={styles.card}>
              <div className={styles.bar} />
              <h3>{country}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className={styles.actionWrap}>
          <Link href="/countries" className={styles.action}>
            Explore Countries
          </Link>
        </div>
      </div>
    </section>
  )
}
