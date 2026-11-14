import Link from 'next/link';
import { ArrowUpRight, Clock3, HeartPulse } from 'lucide-react';
import { workPermitRoutes } from '@/lib/workPermitRoutes';
import styles from '@/app/work-permit/routes.module.css';

const images: Record<string, string> = {
  'turkey-electricians': '/services/turkey.jpg',
  'azerbaijan-construction': '/services/global-support.jpg',
  'sweden-job-seeker': '/home/home-hero-airplane.jpg',
  'italy-freelancer': '/services/italy.jpg',
};

export function RouteDirectory() {
  const current = workPermitRoutes.filter(route => route.status !== 'coming-soon');
  const upcoming = workPermitRoutes.filter(route => route.status === 'coming-soon');

  return (
    <section className={styles.directory}>
      <div className={styles.directoryInner}>
        <div className={styles.directoryHead}>
          <p className={styles.kicker}>Explore the routes</p>
          <h2>Visa and permit guides</h2>
          <p>{current.length} detailed routes{upcoming.length > 0 ? ` and ${upcoming.length} coming-soon service` : ''}. Compare eligibility, documents, timelines and limitations. See each guide for its source and review status.</p>
        </div>
        <div className={styles.routeGrid}>
          {current.map((route, index) => (
            <article key={route.slug} className={styles.routeCard}>
              <div className={styles.routeImage}>
                <img src={images[route.slug]} alt={`${route.country} route overview`} width="600" height="400" loading="lazy" />
                <span>0{index + 1}</span>
              </div>
              <div className={styles.routeBody}>
                <p className={styles.kicker}>{route.country}</p>
                <h3>{route.title}</h3>
                <p>{route.route}</p>
                <small>{route.validity}</small>
              </div>
              <Link href={`/work-permit/${route.slug}`}>Read the route guide <ArrowUpRight size={15} /></Link>
            </article>
          ))}
        </div>
        {upcoming.map(route => (
          <article key={route.slug} className={styles.upcomingCard}>
            <div className={styles.healthVisual} aria-hidden="true">
              <HeartPulse size={64} strokeWidth={1} />
              <strong>{route.country}</strong>
              <span>Healthcare Assistant</span>
            </div>
            <div className={styles.upcomingBody}>
              <span className={styles.statusBadge}><Clock3 size={13} />Coming soon</span>
              <h3>{route.country} - {route.title}</h3>
              <p>{route.route}</p>
              <p className={styles.upcomingNote}>{route.statusNote}</p>
              <div className={styles.upcomingActions}>
                <Link className={styles.button} href={`/work-permit/${route.slug}`}>Explore requirements <ArrowUpRight size={15} /></Link>
                <Link className={styles.interestLink} href={`/contact?route=${route.slug}#consultation`}>Register interest <ArrowUpRight size={14} /></Link>
              </div>
            </div>
          </article>
        ))}
        <div className={styles.other}>
          <h3>Other destinations</h3>
          <p>Greece, Portugal, Canada, United Kingdom, Japan, New Zealand, Bulgaria, Belarus, United States (USA), and Poland are mentioned for general destination guidance only. Detailed route eligibility and application guides are not yet provided.</p>
        </div>
      </div>
    </section>
  );
}
