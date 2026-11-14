import styles from './AboutStory.module.css'

export function AboutStory() {
  return (
    <section className={styles.wrap}>
      <div className={styles.mediaBlock}>
        <div className={styles.image} />
        <div className={styles.label}>International Work Permit Platform</div>
      </div>

      <div className={styles.content}>
        <div className={styles.kicker}>Our Story</div>
        <h2>Making global employment simpler, clearer, and more accessible</h2>
        <p className={styles.lead}>
          Working abroad can change lives, but the process often feels confusing, slow, and difficult to understand.
          GetWorkPermits was built to remove that confusion and replace it with clarity, support, and trust.
        </p>
        <p>
          We combine professional guidance, AI-powered assistance, and responsive support so applicants can move
          forward with more confidence. From first questions to application preparation, our focus is to make each step
          easier to understand and easier to act on.
        </p>
        <p>
          We are building a platform where international work permits are no longer overwhelming, but structured,
          transparent, and accessible for people from different skills, locations, and career backgrounds.
        </p>
      </div>
    </section>
  )
}
