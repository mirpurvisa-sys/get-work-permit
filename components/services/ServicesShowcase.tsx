import {RouteDirectory} from '@/components/work-permit/RouteDirectory'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  FileCheck2,
  Globe2,
  MapPinned,
  Route,
  ShieldCheck,
} from 'lucide-react'

import { ScrollFlipPanel } from '@/components/home/ScrollFlipPanel'
import { ScrollReveal } from '@/components/home/ScrollReveal'
import { getCountryImage } from '@/lib/countryImages'

import styles from './ServicesShowcase.module.css'

type Destination = {
  name: string
  region: string
  focus: string
  summary: string
  image: string
}

const destinations: Destination[] = [
  {
    name: 'Italy',
    region: 'Southern Europe',
    focus: 'Digital nomad visa for established remote freelancers',
    summary:
      'Our detailed Italy guide covers qualified remote freelance professionals. Construction and general employment require different routes.',
    image: getCountryImage('Italy'),
  },
  {
    name: 'Greece',
    region: 'Mediterranean Europe',
    focus: 'Hospitality, tourism-linked, and support-focused opportunities',
    summary:
      'A destination often considered by applicants who want Mediterranean market access and a clearer path into service-led opportunities.',
    image: getCountryImage('Greece'),
  },
  {
    name: 'Portugal',
    region: 'Western Europe',
    focus: 'Operational, hospitality, and growing professional pathways',
    summary:
      'A well-regarded route for applicants who value quality of life, a stable environment, and a more structured move into Europe.',
    image: getCountryImage('Portugal'),
  },
  {
    name: 'Canada',
    region: 'North America',
    focus: 'Skilled, trade, logistics, and support-led work permit routes',
    summary:
      'One of the most requested destinations for applicants looking for broader employer demand, clearer permit structures, and long-term career direction.',
    image: getCountryImage('Canada'),
  },
  {
    name: 'United Kingdom',
    region: 'Northwestern Europe',
    focus: 'Care, hospitality, business support, and skilled professional routes',
    summary:
      'A strong market for applicants targeting internationally recognized roles across both skilled and service-based sectors.',
    image: getCountryImage('United Kingdom'),
  },
  {
    name: 'Turkey',
    region: 'Europe-Asia Corridor',
    focus: 'Operations, manufacturing, and trade-connected work environments',
    summary:
      'A practical regional option for applicants evaluating dynamic commercial markets and cross-continental business access.',
    image: getCountryImage('Turkey'),
  },
  {
    name: 'Bulgaria',
    region: 'Southeastern Europe',
    focus: 'Operational, support, and industry-linked opportunities',
    summary:
      'An emerging European option for applicants who want a more accessible route into operational and support-focused work environments.',
    image: getCountryImage('Bulgaria'),
  },
  {
    name: 'Belarus',
    region: 'Eastern Europe',
    focus: 'Technical, industrial, and support-linked work environments',
    summary:
      'A route that may suit applicants interested in industrial settings and technically oriented opportunities where process clarity matters.',
    image: getCountryImage('Belarus'),
  },
  {
    name: 'New Zealand',
    region: 'Oceania',
    focus: 'Trade, service, and practical relocation-oriented pathways',
    summary:
      'A destination that continues to attract applicants looking for structured relocation opportunities and a more balanced long-term move.',
    image: getCountryImage('New Zealand'),
  },
  {
    name: 'Japan',
    region: 'East Asia',
    focus: 'Engineering, specialist, and high-skill international roles',
    summary:
      'A compelling route for applicants targeting more specialized sectors and a highly structured international work environment.',
    image: getCountryImage('Japan'),
  },
  {
    name: 'United States',
    region: 'North America',
    focus: 'Professional, support, and high-growth employment pathways',
    summary:
      'A broad employment market for applicants evaluating scale, sector variety, and larger long-term career opportunities.',
    image: getCountryImage('United States'),
  },
  {
    name: 'Poland',
    region: 'Central Europe',
    focus: 'Logistics, manufacturing, and trade-oriented opportunities',
    summary:
      'A growing destination for applicants looking for practical access to European work opportunities in active industrial and trade-linked sectors.',
    image: getCountryImage('Poland'),
  },
]

const spotlightDestinations = [destinations[0], destinations[3], destinations[4], destinations[11]]

const quickFacts = [
  {
    value: '12',
    label: 'destinations',
  },
  {
    value: '4',
    label: 'core regions',
  },
  {
    value: '24/7',
    label: 'AI-assisted support',
  },
]

const supportLanes = [
  {
    icon: Route,
    title: 'Country and route evaluation',
    text: 'We help you compare destinations and narrow the route that fits your profile, priorities, and timing before the process becomes costly or confusing.',
  },
  {
    icon: FileCheck2,
    title: 'Application readiness support',
    text: 'From document expectations to process preparation, each next step is organized so you know what to prepare and what to avoid.',
  },
  {
    icon: ShieldCheck,
    title: 'Ongoing guidance with clarity',
    text: 'Our team and AI-assisted support help you stay informed through the process, with clearer answers and fewer avoidable delays.',
  },
]

export function ServicesShowcase() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <ScrollReveal as="span" className={`${styles.kicker}  `}>
                Our Services
              </ScrollReveal>

              <ScrollReveal className={` `} delay={90}>
                <h1>Work permit support built around real destinations and clearer next steps.</h1>
              </ScrollReveal>

              <ScrollReveal className={` `} delay={170}>
                <p>
                  GetWorkPermits supports professionals and workers who want to explore international
                  employment without relying on scattered advice or unclear route assumptions. This
                  page is designed to help you compare destinations, understand the kind of pathways
                  each market may suit, and move toward the next step with more confidence.
                </p>
              </ScrollReveal>

              <ScrollReveal className={` `} delay={250}>
                <p>
                  Whether you are considering Europe, North America, or Asia-Pacific options, our
                  service model is built to bring structure to the decision before the application
                  stage becomes overwhelming.
                </p>
              </ScrollReveal>

              <ScrollReveal className={`${styles.heroActions}  `} delay={330}>
                <Link href="/contact" className={styles.primaryAction}>
                  Get Consultation
                  <ArrowRight size={18} />
                </Link>
                <Link href="/countries" className={styles.secondaryAction}>
                  Explore Countries
                </Link>
              </ScrollReveal>

              <div className={styles.factRow}>
                {quickFacts.map((fact, index) => (
                  <ScrollReveal
                    key={fact.label}
                    as="article"
                    className={`${styles.factCard}  `}
                    delay={400 + index * 90}
                  >
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className={styles.heroVisuals}>
              <ScrollFlipPanel className={styles.heroFeaturePanel}>
                <article className={styles.heroFeatureCard}>
                  <div className={styles.heroFeatureMedia}>
                    <img
                      src={getCountryImage('Italy')}
                      alt="Italy destination visual"
                      width={1600}
                      height={1000}
                      className={styles.coverImage}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                    <div className={styles.mediaShade} />
                    <span className={styles.mediaTag}>Featured destination</span>
                  </div>

                  <div className={styles.heroFeatureBody}>
                    <span className={styles.cardEyebrow}>Italy</span>
                    <h2>One of the most requested destinations for applicants exploring Europe.</h2>
                    <p>
                      A practical starting point for applicants comparing recognizable demand,
                      strong destination appeal, and route clarity.
                    </p>
                  </div>
                </article>
              </ScrollFlipPanel>

              <div className={styles.heroStack}>
                <ScrollReveal
                  className={`${styles.signalCard}  `}
                  delay={160}
                >
                  <div className={styles.signalHeader}>
                    <Globe2 size={18} />
                    <span>Multi-region advisory</span>
                  </div>
                  <p>
                    Europe, North America, and Asia-Pacific destinations organized into a clearer
                    advisory flow for faster comparison.
                  </p>
                </ScrollReveal>

                <ScrollReveal
                  className={`${styles.miniFeatureCard}  `}
                  delay={260}
                >
                  <div className={styles.miniFeatureMedia}>
                    <img
                      src={getCountryImage('Canada')}
                      alt="Canada destination overview"
                      width={1400}
                      height={900}
                      className={styles.coverImage}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.miniFeatureBody}>
                    <span className={styles.cardEyebrow}>How we support clients</span>
                    <h3>Expert guidance strengthened by AI-assisted answers and preparation support.</h3>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RouteDirectory />

      <section className={styles.spotlightSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.sectionIntro}  `} delay={60}>
            <span className={styles.sectionKicker}>Destination spotlight</span>
            <h2>Featured destinations clients most often compare first.</h2>
            <p>
              These destinations are a useful starting point for applicants who want to understand
              where their profile may fit before reviewing the full list.
            </p>
          </ScrollReveal>

          <div className={styles.spotlightGrid}>
            {spotlightDestinations.map((destination, index) => (
              <ScrollReveal
                key={destination.name}
                as="article"
                className={`${styles.spotlightCard}  `}
                delay={110 + index * 90}
              >
                <div className={styles.spotlightMedia}>
                  <img
                    src={destination.image}
                    alt={`${destination.name} service route`}
                    width={1600}
                    height={1000}
                    className={styles.coverImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.mediaShade} />
                </div>

                <div className={styles.spotlightBody}>
                  <span className={styles.cardEyebrow}>{destination.region}</span>
                  <h3>{destination.name}</h3>
                  <p>{destination.summary}</p>
                  <span className={styles.focusChip}>{destination.focus}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.strategySection}>
        <div className={styles.container}>
          <div className={styles.strategyGrid}>
            <ScrollFlipPanel className={styles.strategyMediaPanel}>
              <div className={styles.strategyMediaCard}>
                <div className={styles.strategyMedia}>
                  <img
                    src="/services/global-support.jpg"
                    alt="Global work permit planning"
                    width={1400}
                    height={900}
                    className={styles.coverImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.mediaShade} />
                </div>

                <div className={styles.strategyFloatingCard}>
                  <span className={styles.cardEyebrow}>Advisory approach</span>
                  <strong>Compare first. Prepare next. Apply with less uncertainty.</strong>
                </div>
              </div>
            </ScrollFlipPanel>

            <div className={styles.strategyCopy}>
              <ScrollReveal className={`${styles.sectionIntro}  `} delay={80}>
                <span className={styles.sectionKicker}>How support works</span>
                <h2>Our service is designed to make country selection and preparation more practical.</h2>
                <p>
                  Every applicant starts from a different place. Some already know the country they
                  want. Others need help comparing routes, understanding suitability, and preparing
                  for the right process. Our role is to make that decision path more structured.
                </p>
              </ScrollReveal>

              <div className={styles.supportGrid}>
                {supportLanes.map((lane, index) => {
                  const Icon = lane.icon

                  return (
                    <ScrollReveal
                      key={lane.title}
                      as="article"
                      className={`${styles.supportCard}  `}
                      delay={170 + index * 90}
                    >
                      <div className={styles.supportIcon}>
                        <Icon size={18} />
                      </div>
                      <h3>{lane.title}</h3>
                      <p>{lane.text}</p>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.directorySection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.sectionIntro}  `} delay={40}>
            <span className={styles.sectionKicker}>All destinations</span>
            <h2>Countries we currently support through our work permit advisory service.</h2>
            <p>
              Browse the full destination list below to compare regional focus, route fit, and the
              kind of opportunities each market may be best known for.
            </p>
          </ScrollReveal>

          <div className={styles.directoryGrid}>
            {destinations.map((destination, index) => (
              <ScrollReveal
                key={destination.name}
                as="article"
                className={`${styles.destinationCard}  `}
                delay={100 + index * 45}
              >
                <div className={styles.destinationMedia}>
                  <img
                    src={destination.image}
                    alt={`${destination.name} overview`}
                    width={1600}
                    height={1000}
                    className={styles.coverImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.destinationOverlay} />
                  <span className={styles.destinationNumber}>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className={styles.destinationBody}>
                  <div className={styles.destinationMeta}>
                    <span className={styles.destinationRegion}>{destination.region}</span>
                    <MapPinned size={16} />
                  </div>
                  <h3>{destination.name}</h3>
                  <p>{destination.summary}</p>
                  <span className={styles.focusChip}>{destination.focus}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.ctaPanel}  `} delay={70}>
            <div className={styles.ctaCopy}>
              <span className={styles.sectionKicker}>Ready to begin</span>
              <h2>Talk to our team and identify the destination that best matches your background and goals.</h2>
              <p>
                If you are unsure where to start, we can help compare countries, clarify your options,
                and turn the next step into a more informed decision.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryAction}>
                Speak with an expert
              </Link>
              <Link href="/about" className={styles.ghostAction}>
                Why GetWorkPermits
              </Link>
            </div>

            <div className={styles.ctaAside}>
              <article className={styles.ctaStat}>
                <Bot size={18} />
                <span>AI-assisted support</span>
              </article>
              <article className={styles.ctaStat}>
                <ShieldCheck size={18} />
                <span>Transparent guidance</span>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
