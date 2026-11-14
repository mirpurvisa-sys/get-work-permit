import Link from 'next/link'
import styles from './AboutOverview.module.css'

const mission = [
  'Simplify Global Employment: Step-by-step guidance for securing work permits worldwide.',
  'Combine Human Expertise with AI: Instant assistance and smart solutions for faster approvals.',
  'Make Work Permits Transparent: Clear instructions, no hidden fees, and accurate document guidance.',
  'Provide Access to Everyone: From skilled professionals to labor workers, our services are inclusive and reliable.',
]

const approach = [
  {
    title: 'Expert Guidance',
    text: 'We have a team of visa and work permit specialists familiar with the rules and requirements of multiple countries. From Italy to Japan, our experts ensure your application is complete and compliant.',
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
    text: 'With GetWorkPermits, you always know what to do next. No hidden fees and no confusing instructions, just clear guidance to help you secure your permit.',
  },
]

const whyChoose = [
  'Trusted by Thousands Globally',
  'AI Assistance for Fast Guidance',
  'Transparent, Step-by-Step Process',
  'Opportunities in Multiple Countries',
  'Quick Responses to Support Your Career',
]

export function AboutOverview() {
  return (
    <section className={styles.wrap}>
      <div className={styles.hero}>
        <div className={styles.left}>
          <h2>Trusted Guidance For Your Global Career</h2>
          <p>
            Whether you’re seeking opportunities in Italy, jobs in UK, work in Japan, or work options in New Zealand, GetWorkPermits is your trusted partner at every step of your overseas journey.
          </p>
        </div>
        <div className={styles.right}>
          <div>
            <h3>Vision</h3>
            <p>To become the world’s most trusted and recognized platform for international work permits where anyone thinking about working abroad instantly remembers GetWorkPermits.</p>
          </div>
          <div>
            <h3>Mission</h3>
            <p>{mission[0]}</p>
            <p>{mission[1]}</p>
            <p>{mission[2]}</p>
            <p>{mission[3]}</p>
          </div>
        </div>
      </div>

      <div className={styles.values}>
        {approach.map((item) => (
          <article key={item.title} className={styles.value}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.hero}>
        <div className={styles.left}>
          <h2>Why Choose Us</h2>
          <p>
            Ready to work abroad? Let our experts guide you through the process with speed, clarity, and confidence.
          </p>
        </div>
        <div className={styles.right}>
          {whyChoose.map((item) => (
            <div key={item}>
              <h3>{item}</h3>
            </div>
          ))}
          <div>
            <Link href="/services">Get Your Work Permit Now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
