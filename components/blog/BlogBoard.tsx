import styles from './BlogBoard.module.css'

const blogs = [
  {
    title: 'Italy Work Permit Guide',
    text: 'Learn the process, review common requirements, and understand how international workers can prepare a stronger application.',
  },
  {
    title: 'Canada Construction Work Permit Tips',
    text: 'Explore practical guidance for foreign workers, documentation expectations, and preparation steps before applying.',
  },
  {
    title: 'UK IT Work Permit Preparation',
    text: 'Understand how skilled applicants can approach the UK work permit process with more clarity and confidence.',
  },
  {
    title: 'Portugal D2 And Work Routes',
    text: 'Discover useful insights about Portugal opportunities, application flow, and what to prepare before starting.',
  },
  {
    title: 'Japan Skilled Work Visa Guidance',
    text: 'Review expert strategies to secure your work permit efficiently and avoid common mistakes during the process.',
  },
  {
    title: 'Working Abroad Without Confusion',
    text: 'Get clear tips, updates, and expert advice designed to help you navigate visa requirements and global work opportunities.',
  },
]

export function BlogBoard() {
  return (
    <section className={styles.wrap}>
      <div className={styles.top}>
        <div className={styles.main}>
          <h2>Stay Informed, Work Abroad Confidently</h2>
          <p>
            Our blog covers up-to-date guides, tips, and insights to help you navigate the process of working abroad. Learn about visa requirements, global work opportunities, and expert strategies to secure your work permit efficiently.
          </p>
        </div>
        <div className={styles.side}>
          <h3>Editorial Focus</h3>
          <ul>
            <li>Work permit guides</li>
            <li>Visa requirement updates</li>
            <li>Country-specific opportunities</li>
            <li>Application strategies</li>
          </ul>
        </div>
      </div>
      <div className={styles.cards}>
        {blogs.map((blog,index) => (
          <article key={blog.title} className={styles.card}>
            <img className={styles.image} src={['/services/italy.jpg','/services/canada.jpg','/services/united-kingdom.jpg','/services/portugal.jpg','/services/japan.jpg','/services/global-support.jpg'][index]} alt={blog.title} width="600" height="400" loading="lazy"/><div className={styles.content}><span className={styles.index}>0{index+1} / Work permit guides</span><h4>{blog.title}</h4>
            <p>{blog.text}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
