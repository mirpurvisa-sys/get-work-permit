import Link from 'next/link'
import styles from './HomeProcess.module.css'

const steps = [
  ['Explore & Choose', 'Find the country and work type that fits your career goals.'],
  ['Apply & Get Guidance', 'Submit your documents and get expert advice plus AI support.'],
  ['Approval & Start Work', 'Once approved, start your overseas career confidently with our ongoing support.'],
]

export function HomeProcess() {
  return (
    <section className={styles.wrap}>
      <div className={styles.heading}>
        <h2>Start Your Work Abroad Journey In 3 Steps</h2>
        <p>GetWorkPermits is designed to keep the process simple, understandable, and action-focused from first inquiry to approval.</p>
      </div>
      <div className={styles.row}>
        {steps.map(([title, text], index) => (
          <article key={title} className={styles.step}>
            <div className={styles.num}>0{index + 1}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className={styles.heading}>
        <p>
          <Link href="/work-permit">Start Your Work Permit Application Today</Link>
        </p>
        <p>“GetWorkPermits helped me secure a construction job in Italy in just 4 weeks. Highly recommended!” – Ahmed K.</p>
        <p>“The AI guidance made the visa process so simple. I got my UK teaching permit without hassle.” – Sarah T.</p>
      </div>
    </section>
  )
}
