import Link from 'next/link'
import styles from './HomeEligibility.module.css'

export function HomeEligibility() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.formCard}>
          <div className={styles.kicker}>Eligibility Inquiry</div>
          <h2>Check your eligibility</h2>

          <form className={styles.form}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Country Interested In" />
            <input type="text" placeholder="Current Location" />
            <select defaultValue="">
              <option value="" disabled>Work Type</option>
              <option>General Employment</option>
              <option>Skilled Worker</option>
              <option>Construction</option>
              <option>Hospitality</option>
            </select>
            <textarea placeholder="Message / Question" />
          </form>

          <div className={styles.actions}>
            <Link href="/contact">Submit Your Query</Link>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.plane}>Work Abroad</div>
          <div className={styles.copy}>
            <span>Smart guidance before you apply</span>
            <h3>Work permits made easy with expert direction and AI-powered support</h3>
            <p>
              A work permit is an official authorization that allows you to work legally in another country.
              GetWorkPermits simplifies the process with fast support, accurate guidance, and clear next steps.
            </p>

            <div className={styles.points}>
              <article>
                <strong>Legal Authorization</strong>
                <p>Stay compliant with local labour and immigration requirements.</p>
              </article>
              <article>
                <strong>Required Documents</strong>
                <p>Prepare the key paperwork before applying and reduce avoidable delays.</p>
              </article>
              <article>
                <strong>Transparent Fees</strong>
                <p>You know exactly what to pay before submission with no hidden charges.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
