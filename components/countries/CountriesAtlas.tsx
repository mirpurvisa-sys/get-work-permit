import {RouteDirectory} from '@/components/work-permit/RouteDirectory'
import {PhotoCollage} from '@/components/PhotoCollage'
import Link from 'next/link'
import { ArrowRight, Bot, Compass, Globe2, MapPinned, MoveRight, ShieldCheck, Stars } from 'lucide-react'

import { ScrollReveal } from '@/components/home/ScrollReveal'
import { getCountryImage } from '@/lib/countryImages'

import styles from './CountriesAtlas.module.css'

type CountryItem = {
  name: string
  region: string
  focus: string
  summary: string
  image: string
}

const countries: CountryItem[] = [
  {
    name: 'Italy',
    region: 'Southern Europe',
    focus: 'Practical work routes with strong destination appeal',
    summary:
      'Italy remains one of the most recognized European destinations for applicants comparing employer-led opportunities and a well-known lifestyle market.',
    image: getCountryImage('Italy'),
  },
  {
    name: 'Greece',
    region: 'Mediterranean Europe',
    focus: 'Service-led and tourism-linked opportunities',
    summary:
      'Greece is often explored by applicants who want Mediterranean market access and opportunities tied to support and service sectors.',
    image: getCountryImage('Greece'),
  },
  {
    name: 'Portugal',
    region: 'Western Europe',
    focus: 'Structured European mobility with strong quality-of-life appeal',
    summary:
      'Portugal is a strong option for applicants looking for a welcoming environment, stable living conditions, and a more measured path into Europe.',
    image: getCountryImage('Portugal'),
  },
  {
    name: 'Canada',
    region: 'North America',
    focus: 'Skilled, trade, logistics, and support-led work permit pathways',
    summary:
      'Canada remains one of the most in-demand destinations for applicants seeking structured processes, broad employer demand, and long-term potential.',
    image: getCountryImage('Canada'),
  },
  {
    name: 'United Kingdom',
    region: 'Northwestern Europe',
    focus: 'Care, hospitality, business support, and professional routes',
    summary:
      'The UK continues to attract applicants who want access to internationally recognized employment markets across both skilled and service sectors.',
    image: getCountryImage('United Kingdom'),
  },
  {
    name: 'Turkey',
    region: 'Europe-Asia Corridor',
    focus: 'Regional opportunities across operations and trade-linked sectors',
    summary:
      'Turkey can suit applicants exploring a dynamic commercial environment positioned between Europe and Asia.',
    image: getCountryImage('Turkey'),
  },
  {
    name: 'Bulgaria',
    region: 'Southeastern Europe',
    focus: 'Operational and industry-linked work environments',
    summary:
      'Bulgaria is an emerging option for applicants who want a more accessible entry point into active European work markets.',
    image: getCountryImage('Bulgaria'),
  },
  {
    name: 'Belarus',
    region: 'Eastern Europe',
    focus: 'Industrial and technically oriented work settings',
    summary:
      'Belarus may appeal to applicants considering industrial environments where route clarity and document preparation are especially important.',
    image: getCountryImage('Belarus'),
  },
  {
    name: 'New Zealand',
    region: 'Oceania',
    focus: 'Relocation-friendly paths with balanced long-term appeal',
    summary:
      'New Zealand is often considered by applicants who value stability, lifestyle, and a more structured international move.',
    image: getCountryImage('New Zealand'),
  },
  {
    name: 'Japan',
    region: 'East Asia',
    focus: 'High-skill and specialist international opportunities',
    summary:
      'Japan is a compelling destination for applicants targeting more specialized sectors within a highly structured employment environment.',
    image: getCountryImage('Japan'),
  },
  {
    name: 'United States',
    region: 'North America',
    focus: 'Large-market opportunities across multiple sectors',
    summary:
      'The United States appeals to applicants comparing scale, sector diversity, and larger long-term professional opportunities.',
    image: getCountryImage('United States'),
  },
  {
    name: 'Poland',
    region: 'Central Europe',
    focus: 'Trade, logistics, and manufacturing-linked employment routes',
    summary:
      'Poland continues to grow as a destination for applicants seeking practical European opportunities in active industrial sectors.',
    image: getCountryImage('Poland'),
  },
]

const topCountries = [countries[3], countries[4], countries[0]]

const quickNotes = [
  {
    icon: Globe2,
    title: '12 destinations currently supported',
    text: 'A focused set of countries where route comparison is easier and guidance stays more structured.',
  },
  {
    icon: Compass,
    title: 'Built for comparison, not guesswork',
    text: 'Review regions, route focus, and market character before choosing the next direction.',
  },
  {
    icon: ShieldCheck,
    title: 'Clearer next-step planning',
    text: 'Use the page to narrow the shortlist before moving into consultation or service support.',
  },
]

const regionBands = [
  { label: 'Europe', text: 'Italy, Greece, Portugal, Bulgaria, Belarus, Poland, and the United Kingdom.' },
  { label: 'North America', text: 'Canada and the United States for applicants comparing broader long-term markets.' },
  { label: 'Asia-Pacific', text: 'Japan, New Zealand, and Turkey for applicants exploring alternative regional routes.' },
]

export function CountriesAtlas() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <ScrollReveal as="span" className={`${styles.kicker}  `}>
                Countries We Serve
              </ScrollReveal>

              <ScrollReveal className={` `} delay={80}>
                <h1>An atlas-style overview of the destinations we currently support.</h1>
              </ScrollReveal>

              <ScrollReveal className={` `} delay={150}>
                <p>
                  This page is designed for comparison. Instead of treating every destination the same,
                  it helps you review countries by region, route character, and the type of opportunity
                  each market may be better known for.
                </p>
              </ScrollReveal>

              <ScrollReveal className={` `} delay={230}>
                <p>
                  Whether you already have a country in mind or you are still narrowing the shortlist,
                  this gives you a clearer place to start before moving into service support.
                </p>
              </ScrollReveal>

              <ScrollReveal className={`${styles.heroActions}  `} delay={310}>
                <Link href="/contact" className={styles.primaryAction}>
                  Start consultation
                  <ArrowRight size={18} />
                </Link>
                <Link href="/services" className={styles.secondaryAction}>
                  View services
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal className={`${styles.atlasPanel}  `} delay={140}>
              <PhotoCollage />
              <div className={styles.atlasHeader}>
                <span className={styles.atlasLabel}>Destination map</span>
                <Stars size={18} />
              </div>

              <div className={styles.regionList}>
                {regionBands.map((band, index) => (
                  <div key={band.label} className={styles.regionRow}>
                    <span className={styles.regionIndex}>0{index + 1}</span>
                    <div>
                      <strong>{band.label}</strong>
                      <p>{band.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <RouteDirectory />

      <section className={styles.noteSection}>
        <div className={styles.container}>
          <div className={styles.noteGrid}>
            {quickNotes.map((note, index) => {
              const Icon = note.icon

              return (
                <ScrollReveal
                  key={note.title}
                  as="article"
                  className={`${styles.noteCard}  `}
                  delay={80 + index * 80}
                >
                  <div className={styles.noteIcon}>
                    <Icon size={18} />
                  </div>
                  <h2>{note.title}</h2>
                  <p>{note.text}</p>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.topSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.sectionIntro}  `} delay={40}>
            <span className={styles.sectionKicker}>Most requested</span>
            <h2>Three destinations that often lead the first conversation.</h2>
            <p>
              These are usually the first comparison points for applicants evaluating demand, visibility,
              and stronger market recognition.
            </p>
          </ScrollReveal>

          <div className={styles.topGrid}>
            {topCountries.map((country, index) => (
              <ScrollReveal
                key={country.name}
                as="article"
                className={`${styles.topCard}  `}
                delay={110 + index * 90}
              >
                <div className={styles.topMedia}>
                  <img
                    src={country.image}
                    alt={`${country.name} destination`}
                    width={1600}
                    height={1000}
                    className={styles.coverImage}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.topBody}>
                  <span className={styles.cardEyebrow}>{country.region}</span>
                  <h3>{country.name}</h3>
                  <p>{country.summary}</p>
                  <div className={styles.topMeta}>
                    <span>{country.focus}</span>
                    <MoveRight size={16} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.directorySection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.sectionIntro}  `} delay={40}>
            <span className={styles.sectionKicker}>Full directory</span>
            <h2>All countries, arranged in a lighter atlas-style grid.</h2>
            <p>
              Browse the full destination list below to compare region, route focus, and the general
              market profile each country is known for.
            </p>
          </ScrollReveal>

          <div className={styles.directoryGrid}>
            {countries.map((country, index) => (
              <ScrollReveal
                key={country.name}
                as="article"
                className={`${styles.countryCard}   ${index % 5 === 0 ? '' : ''}`}
                delay={90 + index * 35}
              >
                <div className={styles.countryMedia}>
                  <img
                    src={country.image}
                    alt={`${country.name} overview`}
                    width={1600}
                    height={1000}
                    className={styles.coverImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.countryShade} />
                  <span className={styles.countryNumber}>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className={styles.countryBody}>
                  <div className={styles.countryMeta}>
                    <span className={styles.regionTag}>{country.region}</span>
                    <MapPinned size={16} />
                  </div>
                  <h3>{country.name}</h3>
                  <p>{country.summary}</p>
                  <span className={styles.focusTag}>{country.focus}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.ctaPanel}  `} delay={60}>
            <div className={styles.ctaMain}>
              <div className={styles.ctaCopy}>
                <span className={styles.sectionKicker}>Next step</span>
                <h2>Need help deciding which country makes the most sense for your profile?</h2>
                <p>
                  We can help you compare destinations, narrow the shortlist, and move into the next
                  step with better clarity.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Link href="/contact" className={styles.primaryAction}>
                  Speak with our team
                </Link>
                <Link href="/services" className={styles.tertiaryAction}>
                  Review service support
                </Link>
              </div>
            </div>

            <div className={styles.ctaBoard}>
              <article className={styles.ctaFeatureCard}>
                <span className={styles.ctaFeatureLabel}>Advisory outcome</span>
                <strong>Shortlist the right destination before you commit time to the wrong route.</strong>
                <p>
                  Compare fit, region, and opportunity style first, then move into consultation with
                  better direction.
                </p>
              </article>

              <div className={styles.ctaStatGrid}>
                <article className={styles.ctaStat}>
                  <Compass size={18} />
                  <span>Country comparison clarity</span>
                </article>
                <article className={styles.ctaStat}>
                  <Bot size={18} />
                  <span>AI-assisted support</span>
                </article>
                <article className={styles.ctaStat}>
                  <ShieldCheck size={18} />
                  <span>Transparent guidance</span>
                </article>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
