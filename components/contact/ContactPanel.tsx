'use client'

import { ConsultationForm } from '@/components/ConsultationForm'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  Mail,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react'

import { ScrollReveal } from '@/components/home/ScrollReveal'

import styles from './ContactPanel.module.css'

const contactCards = [
  {
    title: 'Email support',
    text: 'Share your background, preferred destination, and questions so our team can guide you with more context.',
    value: 'support@getworkpermits.com',
    icon: Mail,
  },
  {
    title: 'Destination guidance',
    text: 'Get help comparing countries, understanding likely routes, and identifying the most realistic next move.',
    value: '12 supported destinations',
    icon: Globe2,
  },
  {
    title: 'Practical planning',
    text: 'Use the conversation to reduce uncertainty around timelines, documents, and what usually comes next.',
    value: 'Structured support',
    icon: ShieldCheck,
  },
]

const expectations = [
  'A clearer view of the route that best fits your profile',
  'Practical guidance before documents and timing become confusing',
  'Support built for applicants comparing multiple destinations',
]

const prepNotes = [
  'Your professional background or field',
  'Countries you are currently considering',
  'Questions about timing, documents, or route selection',
]

export function ContactPanel() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <ScrollReveal
                as="span"
                className={`${styles.kicker}  `}
              >
                Contact GetWorkPermits
              </ScrollReveal>

              <ScrollReveal
                className={` `}
                delay={90}
              >
                <h1>Start the conversation before the process starts feeling unclear.</h1>
              </ScrollReveal>

              <ScrollReveal
                className={` `}
                delay={170}
              >
                <p>
                  Reach out if you want help understanding the route, comparing countries, or
                  figuring out the most practical next step for your work permit plans.
                </p>
              </ScrollReveal>

              <ScrollReveal
                className={` `}
                delay={240}
              >
                <p>
                  This page is designed for applicants who want clarity before they spend time on
                  the wrong path. Tell us where you want to go, what your current questions are,
                  and what kind of guidance would be most useful.
                </p>
              </ScrollReveal>

              <ScrollReveal
                className={`${styles.heroActions}  `}
                delay={320}
              >
                <a href="mailto:support@getworkpermits.com" className={styles.primaryAction}>
                  Email our team
                  <ArrowRight size={18} />
                </a>
                <Link href="/services" className={styles.secondaryAction}>
                  Explore services
                </Link>
              </ScrollReveal>

              <div className={styles.heroMetrics}>
                {[
                  ['Online-first support', 'Practical contact model'],
                  ['12 destinations', 'Across Europe, North America, and Asia-Pacific'],
                  ['Pre-application clarity', 'Helpful before route confusion grows'],
                ].map(([value, label], index) => (
                  <ScrollReveal
                    key={value}
                    as="article"
                    className={`${styles.metricCard}  `}
                    delay={350 + index * 80}
                  >
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal
              className={`${styles.heroPanel}  `}
              delay={150}
            >
              <div className={styles.heroImageWrap}>
                <Image
                  src="/contact/contact-support-laptop.webp"
                  alt="Digital contact support and communication guidance"
                  width={1400}
                  height={900}
                  className={styles.heroImage}
                  priority
                />
              </div>

              <div className={styles.heroPanelBody}>
                <span className={styles.panelEyebrow}>What to expect</span>
                <div className={styles.expectationList}>
                  {expectations.map((item) => (
                    <article key={item} className={styles.expectationItem}>
                      <MessageSquareText size={18} />
                      <span>{item}</span>
                    </article>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {contactCards.map((card, index) => {
              const Icon = card.icon

              return (
                <ScrollReveal
                  key={card.title}
                  as="article"
                  className={`${styles.contactCard}  `}
                  delay={70 + index * 80}
                >
                  <div className={styles.cardIcon}>
                    <Icon size={18} />
                  </div>
                  <span className={styles.cardLabel}>{card.title}</span>
                  <h2>{card.value}</h2>
                  <p>{card.text}</p>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formGrid}>
            <ScrollReveal
              className={`${styles.formCard}  `}
              delay={60}
            >
              <ConsultationForm />
            </ScrollReveal>

            <div className={styles.sideColumn}>
              <ScrollReveal
                className={`${styles.sideCard}  `}
                delay={120}
              >
                <span className={styles.sectionKicker}>Before you send</span>
                <h3>Including a few details makes the reply much more useful.</h3>

                <div className={styles.noteList}>
                  {prepNotes.map((item) => (
                    <article key={item} className={styles.noteItem}>
                      <BriefcaseBusiness size={18} />
                      <span>{item}</span>
                    </article>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal
                className={`${styles.supportBoard}  `}
                delay={180}
              >
                <div className={styles.supportHeader}>
                  <MapPinned size={18} />
                  <span>How we support clients</span>
                </div>

                <p>
                  Our support model is built for applicants who want clearer route selection before
                  the process becomes document-heavy or overwhelming.
                </p>

                <Link href="/countries" className={styles.ghostAction}>
                  View supported countries
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
