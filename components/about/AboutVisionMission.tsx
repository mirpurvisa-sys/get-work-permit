import styles from './AboutVisionMission.module.css'

export function AboutVisionMission() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <article className={styles.card}>
          <div className={styles.kicker}>Our Vision</div>
          <h2>To become the world’s most trusted and recognized platform for international work permits</h2>
          <p>
            We want GetWorkPermits to be the name people instantly remember whenever they think about working abroad.
          </p>
        </article>

        <article className={styles.card}>
          <div className={styles.kicker}>Our Mission</div>
          <div className={styles.list}>
            <div>
              <strong>Simplify Global Employment</strong>
              <p>Step-by-step guidance for securing work permits worldwide.</p>
            </div>
            <div>
              <strong>Combine Human Expertise with AI</strong>
              <p>Instant assistance and smart solutions for faster approvals.</p>
            </div>
            <div>
              <strong>Make Work Permits Transparent</strong>
              <p>Clear instructions, no hidden fees, and accurate document guidance.</p>
            </div>
            <div>
              <strong>Provide Access to Everyone</strong>
              <p>Inclusive and reliable support for skilled professionals and labour workers alike.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
