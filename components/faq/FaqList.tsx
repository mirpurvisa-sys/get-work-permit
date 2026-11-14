import Link from 'next/link'
import styles from './FaqList.module.css'

const faqs = [
  ['What is a work permit?', 'A work permit is an official authorization that allows you to legally work in another country. It ensures compliance with local labor and immigration laws.'],
  ['Which countries can I apply for through GetWorkPermits?', 'We provide guidance for work permits in Italy, Greece, Portugal, Canada, United Kingdom, Turkey, Bulgaria, Belarus, New Zealand, Japan, USA, and Poland.'],
  ['Can GetWorkPermits help with all types of work permits?', 'Yes. Our platform supports both skilled and general employment permits across multiple countries.'],
  ['Is AI assistance available during the application?', 'Absolutely. Our AI-powered system provides instant guidance, document checks, and step-by-step instructions to speed up your process.'],
  ['How fast can I get my work permit?', 'Processing time depends on the country and type of permit. We guide you on best practices to maximize speed and accuracy.'],
  ['Do I need to pay upfront fees?', 'All fees are transparent. You will know exactly what to pay before submitting your application with no hidden charges.'],
  ['Can I work abroad without a work permit?', 'No. Working without a valid permit is illegal and may result in fines, deportation, or bans from re-entering the country.'],
  ['What documents do I need for a work permit?', 'Basic documents usually include passport, application forms, proof of qualifications, employment offer, and sometimes police clearance or medical certificates. Requirements vary by country.'],
  ['Can I get help if my application is rejected?', 'Yes. Our experts review your application, identify issues, and guide you on resubmission or alternative options.'],
  ['How do I start my work permit application?', 'Click the Apply Now button, select your country, and follow the step-by-step instructions. Our team will assist you throughout the process.'],
]

export function FaqList() {
  return (
    <section className={styles.wrap}>
      <div className={styles.list}>
        {faqs.map(([q, a]) => (
          <details className={styles.item} key={q}>
            <summary className={styles.q}>{q}<span aria-hidden="true">+</span></summary>
            <div className={styles.a}>{a}</div>
          </details>
        ))}
        <article className={styles.item}>
          <div className={styles.q}>Still Have Questions?</div>
          <div className={styles.a}>
            If you did not find your answer here, our team is ready to help. Get personalized guidance for your international work permit application today. <Link href="/contact">Contact Our Experts Now</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
