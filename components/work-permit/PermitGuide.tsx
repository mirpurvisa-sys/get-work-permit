import {RouteDirectory} from '@/components/work-permit/RouteDirectory'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileBadge2,
  Globe2,
  HelpCircle,
  MapPinned,
  ShieldCheck,
} from 'lucide-react'

import { ScrollReveal } from '@/components/home/ScrollReveal'

import styles from './PermitGuide.module.css'

const countries = [
  'Italy',
  'Greece',
  'Portugal',
  'Canada',
  'United Kingdom',
  'Turkey',
  'Bulgaria',
  'Belarus',
  'New Zealand',
  'Japan',
  'United States',
  'Poland',
]

const importanceItems = [
  {
    title: 'Legal authorization',
    text: 'A valid work permit confirms you are allowed to work in the destination country under the correct employment category.',
  },
  {
    title: 'Employer and document compliance',
    text: 'It helps align your application with local labor rules, employer requirements, and the documentation expected by immigration authorities.',
  },
  {
    title: 'Lower process risk',
    text: 'Starting work without the correct permit can lead to rejections, delays, cancellations, or serious legal complications.',
  },
  {
    title: 'Better planning',
    text: 'Understanding the permit route early helps you prepare realistic next steps, timelines, and document requirements.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Choose the right country',
    text: 'Start by identifying the destination that best matches your profile, goals, and type of opportunity.',
  },
  {
    step: '02',
    title: 'Prepare the required information',
    text: 'Gather your personal details and documents so the route can be reviewed with more accuracy and fewer avoidable issues.',
  },
  {
    step: '03',
    title: 'Move through the process with guidance',
    text: 'Once the route is clear, the next steps become easier to follow, from preparation through approval and onward planning.',
  },
]

const faqs = [
  {
    question: 'Do I need a work permit to work abroad?',
    answer:
      'In most cases, yes. A work permit is typically required to work legally in another country, even when the role itself has already been identified.',
  },
  {
    question: 'How long does it take to get a work permit?',
    answer:
      'Processing times vary by country, employer, permit category, and document readiness. Timelines are rarely identical across destinations.',
  },
  {
    question: 'Can I apply without understanding the exact route first?',
    answer:
      'It is possible to begin too early, but it is not ideal. Clarifying the route first usually reduces confusion, weak submissions, and wasted time.',
  },
  {
    question: 'What if my application is rejected?',
    answer:
      'A rejection does not always mean the opportunity is over. In many cases, the next best step is reviewing the route, the documents, or alternative options more carefully.',
  },
]

export function PermitGuide() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <ScrollReveal as="span" className={`${styles.kicker}  `}>
                Work Permit Guide
              </ScrollReveal>

              <ScrollReveal className={` `} delay={90}>
                <h1>Understand what a work permit is and how to move through the process with more clarity.</h1>
              </ScrollReveal>

              <ScrollReveal className={` `} delay={170}>
                <p>
                  A work permit is the official authorization that allows you to work legally in a
                  foreign country. For most applicants, it is one of the most important parts of the
                  international employment process because it connects your opportunity to the legal
                  right to work.
                </p>
              </ScrollReveal>

              <ScrollReveal className={` `} delay={250}>
                <p>
                  This page is built as a practical guide, not just a definition. It explains why work
                  permits matter, how the process usually unfolds, and where GetWorkPermits can help
                  bring more structure to the next step.
                </p>
              </ScrollReveal>

              <ScrollReveal className={`${styles.heroActions}  `} delay={330}>
                <Link href="/contact" className={styles.primaryAction}>
                  Get consultation
                  <ArrowRight size={18} />
                </Link>
                <Link href="/countries" className={styles.secondaryAction}>
                  Explore countries
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal className={`${styles.guidePanel}  `} delay={160}>
              <div className={styles.guideMedia}>
                <Image
                  src="/work-permit/work-visa-france-cover.avif"
                  alt="Work visa guidance and application support"
                  width={1400}
                  height={900}
                  className={styles.coverImage}
                  priority
                />
              </div>

              <div className={styles.guideBody}>
                <span className={styles.cardEyebrow}>Guide snapshot</span>
                <div className={styles.guideFacts}>
                  <article className={styles.factRow}>
                    <BadgeCheck size={18} />
                    <span>Legal work authorization matters before the job begins</span>
                  </article>
                  <article className={styles.factRow}>
                    <ClipboardCheck size={18} />
                    <span>Better preparation usually means fewer avoidable delays</span>
                  </article>
                  <article className={styles.factRow}>
                    <Globe2 size={18} />
                    <span>Country rules differ, so route clarity comes first</span>
                  </article>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <RouteDirectory />

      <section className={styles.explainerSection}>
        <div className={styles.container}>
          <div className={styles.explainerGrid}>
            <ScrollReveal className={`${styles.explainerCard}  `} delay={50}>
              <span className={styles.sectionKicker}>What is it?</span>
              <h2>A work permit is the legal bridge between an opportunity and your ability to start working.</h2>
              <p>
                It is not just a formality. A work permit usually confirms that the employment
                arrangement, the applicant, and the destination country all meet the required legal
                conditions.
              </p>
              <p>
                Without the correct permit route, an opportunity may still exist on paper, but the
                legal ability to work may not. That is why route selection and preparation matter so
                much from the beginning.
              </p>
            </ScrollReveal>

            <ScrollReveal className={`${styles.sideNote}  `} delay={140}>
              <div className={styles.sideNoteHeader}>
                <FileBadge2 size={18} />
                <span>Why people get stuck</span>
              </div>
              <p>
                Many applicants start with the job in mind but not the permit route. That usually
                leads to confusion around documents, timing, and what the next real step should be.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.importanceSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.sectionIntro}  `} delay={40}>
            <span className={styles.sectionKicker}>Why it matters</span>
            <h2>Work permits are important because they protect the process, not just the outcome.</h2>
            <p>
              A strong application process starts with understanding why the permit exists and what it
              is meant to confirm.
            </p>
          </ScrollReveal>

          <div className={styles.importanceGrid}>
            {importanceItems.map((item, index) => (
              <ScrollReveal
                key={item.title}
                as="article"
                className={`${styles.importanceCard}  `}
                delay={100 + index * 80}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.sectionIntro}  `} delay={40}>
            <span className={styles.sectionKicker}>Our process</span>
            <h2>A simpler view of how most applicants move through the work permit process.</h2>
            <p>
              The exact details change by country, but the broader logic usually follows the same
              pattern: choose, prepare, then move forward with more confidence.
            </p>
          </ScrollReveal>

          <div className={styles.processTrack}>
            {processSteps.map((item, index) => (
              <ScrollReveal
                key={item.step}
                as="article"
                className={`${styles.processCard}  `}
                delay={110 + index * 90}
              >
                <span className={styles.processStep}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.countrySection}>
        <div className={styles.container}>
          <div className={styles.countryBoard}>
            <ScrollReveal className={`${styles.countryIntro}  `} delay={50}>
              <span className={styles.sectionKicker}>Countries covered</span>
              <h2>Work permit guidance available across multiple destinations.</h2>
              <p>
                We currently support applicants comparing routes across Europe, North America, and
                Asia-Pacific.
              </p>
            </ScrollReveal>

            <div className={styles.countryChips}>
              {countries.map((country, index) => (
                <ScrollReveal
                  key={country}
                  as="span"
                  className={`${styles.countryChip}  `}
                  delay={90 + index * 28}
                >
                  <MapPinned size={14} />
                  {country}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.sectionIntro}  `} delay={40}>
            <span className={styles.sectionKicker}>Common questions</span>
            <h2>Quick answers to the questions applicants usually ask first.</h2>
          </ScrollReveal>

          <div className={styles.faqGrid}>
            {faqs.map((item, index) => (
              <ScrollReveal
                key={item.question}
                as="article"
                className={`${styles.faqCard}  `}
                delay={90 + index * 70}
              >
                <div className={styles.faqHeader}>
                  <HelpCircle size={18} />
                  <h3>{item.question}</h3>
                </div>
                <p>{item.answer}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.ctaPanel}  `} delay={60}>
            <div className={styles.ctaCopy}>
              <span className={styles.sectionKicker}>Ready to move forward?</span>
              <h2>Talk to our team if you want help understanding the route before applying.</h2>
              <p>
                Clearer route selection and better preparation can make the rest of the process feel
                much more manageable.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryAction}>
                Speak with our team
              </Link>
              <Link href="/services" className={styles.ghostAction}>
                View services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
