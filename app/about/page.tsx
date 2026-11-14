import {PhotoCollage} from '@/components/PhotoCollage'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, CheckCircle2, Clock3, Globe2, Lightbulb, ShieldCheck } from 'lucide-react'

import { ScrollFlipPanel } from '@/components/home/ScrollFlipPanel'
import { ScrollReveal } from '@/components/home/ScrollReveal'

import styles from './page.module.css'

const missionItems = [
  {
    title: 'Simplify Global Employment',
    text: 'Step-by-step guidance for securing work permits worldwide.',
  },
  {
    title: 'Combine Human Expertise with AI',
    text: 'Instant assistance and smart solutions for faster approvals.',
  },
  {
    title: 'Make Work Permits Transparent',
    text: 'Clear instructions, no hidden fees, and accurate document guidance.',
  },
  {
    title: 'Provide Access to Everyone',
    text: 'From skilled professionals to labor workers, our services are inclusive and reliable.',
  },
]

const approachItems = [
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
    text: 'With GetWorkPermits, you always know what to do next. No hidden fees, no confusing instructions just clear guidance to help you secure your permit.',
  },
]

const reasons = [
  {
    icon: ShieldCheck,
    text: 'Trusted by Thousands Globally',
  },
  {
    icon: Bot,
    text: 'AI Assistance for Fast Guidance',
  },
  {
    icon: Lightbulb,
    text: 'Transparent, Step-by-Step Process',
  },
  {
    icon: Globe2,
    text: 'Opportunities in Multiple Countries',
  },
  {
    icon: Clock3,
    text: 'Quick Responses to Support Your Career',
  },
]

export const metadata: Metadata = {
  title: 'About GetWorkPermits | Trusted Global Work Permit Platform',
  description:
    'Learn about GetWorkPermits, the world’s trusted platform for international work permits. Expert guidance, AI-powered support, and fast response for overseas employment opportunities.',
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMedia} />
        <div className={styles.heroOverlay} />

        <div className={styles.container}>
          <div className={styles.heroLayout}><div className={styles.heroContent}>
            <ScrollReveal
              as="p"
              className={`${styles.breadcrumb}  `}
              delay={20}
            >
              .
            </ScrollReveal>
            <ScrollReveal
              as="span"
              className={`${styles.eyebrow}  `}
              delay={90}
            >
              About Us
            </ScrollReveal>
            <ScrollReveal
              as="h1"
              className={` `}
              delay={160}
            >
              Trusted Guidance for Your Global Career
            </ScrollReveal>
            <ScrollReveal
              as="p"
              className={` `}
              delay={260}
            >
              At GetWorkPermits, we believe that working abroad should be simple, transparent, and
              accessible for everyone. Our platform combines expert visa guidance, AI-powered
              assistance, and fast response support to make international employment easy no matter
              your skills, location, or career goals.
            </ScrollReveal>
            <ScrollReveal
              as="p"
              className={` `}
              delay={360}
            >
              Whether you&apos;re seeking opportunities in Italy, jobs in UK, work in Japan, or work
              options in New Zealand, GetWorkPermits is your trusted partner at every step of your
              overseas journey.
            </ScrollReveal>

            <ScrollReveal
              className={`${styles.heroActions}  `}
              delay={460}
            >
              <Link href="/services" className={styles.primaryButton}>
                Get Your Work Permit Now
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Talk to an expert
              </Link>
            </ScrollReveal>
          </div><PhotoCollage images={['/about/about-mission-handshake.avif','/services/italy.jpg','/about/about-vision-meeting.avif']}/></div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introLayout}>
            <ScrollReveal className={`${styles.copyCard}  `} delay={80}>
              <span className={styles.eyebrow}>Our Vision</span>
              <h2>To become the world&apos;s most trusted and recognized platform for international work permits.</h2>
              <p>
                Where anyone thinking about working abroad instantly remembers GetWorkPermits.
              </p>
            </ScrollReveal>

            <ScrollFlipPanel className={`${styles.panelFlip} `}>
              <div className={styles.imageStage}>
                <div className={styles.imagePanel} />
                <div className={styles.floatingMissionCard}>
                  <span className={styles.floatingLabel}>Our Mission</span>
                  <ul className={styles.floatingList}>
                    {missionItems.slice(0, 2).map((item) => (
                      <li key={item.title}>{item.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollFlipPanel>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.featureLayout}>
            <ScrollFlipPanel className={`${styles.panelFlip} `}>
              <div className={styles.featureMediaWrap}>
                <div className={styles.featureMedia} />
              </div>
            </ScrollFlipPanel>

            <div className={styles.featureContent}>
              <ScrollReveal className={`${styles.sectionHeader}  `} delay={120}>
                <span className={styles.eyebrow}>Our Mission</span>
                <h2>Our Mission</h2>
              </ScrollReveal>

              <div className={styles.missionGrid}>
                {missionItems.map((item, index) => (
                  <ScrollReveal
                    key={item.title}
                    as="article"
                    className={`${styles.missionCard}  `}
                    delay={180 + index * 90}
                  >
                    <CheckCircle2 size={18} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.approachLayout}>
            <ScrollReveal className={`${styles.sectionHeader}  `} delay={60}>
              <span className={styles.eyebrow}>Our Approach</span>
              <h2>Our Approach</h2>
            </ScrollReveal>

            <div className={styles.approachGrid}>
              {approachItems.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  as="article"
                  className={`${styles.approachCard}  `}
                  delay={120 + index * 100}
                >
                  <span className={styles.cardIndex}>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.container}>
          <div className={styles.darkGrid}>
            <ScrollFlipPanel className={`${styles.panelFlip} `}>
              <div className={styles.darkMediaWrap}>
                <div className={styles.darkMedia} />
              </div>
            </ScrollFlipPanel>

            <ScrollReveal className={`${styles.darkCopy}  `} delay={140}>
              <span className={styles.darkEyebrow}>Why Choose Us</span>
              <h2>Why Choose Us</h2>
              <div className={styles.reasonList}>
                {reasons.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <ScrollReveal
                      key={item.text}
                      as="article"
                      className={`${styles.reasonItem}  `}
                      delay={220 + index * 80}
                    >
                      <Icon size={18} />
                      <span>{item.text}</span>
                    </ScrollReveal>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.ctaPanel}  `} delay={60}>
            <div className={styles.ctaLead}>
              <span className={styles.eyebrow}>Start Your Work Abroad Journey Today</span>
              <h2>
                Ready to work abroad? Let our experts guide you through the process with speed,
                clarity, and confidence.
              </h2>
              <p className={styles.ctaText}>
                From country selection to document preparation, we help turn uncertainty into a
                clearer and more structured next step.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/services" className={styles.primaryButton}>
                  Get Your Work Permit Now
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Talk to an expert
                </Link>
              </div>
            </div>

            <div className={styles.ctaBoard}>
              <article className={styles.ctaFeatureCard}>
                <span className={styles.ctaFeatureLabel}>What you get</span>
                <strong>A faster route from first question to application readiness.</strong>
              </article>

              <div className={styles.ctaPointGrid}>
                <article className={styles.ctaPoint}>
                  <ShieldCheck size={18} />
                  <span>Transparent guidance</span>
                </article>
                <article className={styles.ctaPoint}>
                  <Bot size={18} />
                  <span>AI-assisted answers</span>
                </article>
                <article className={styles.ctaPoint}>
                  <Globe2 size={18} />
                  <span>Multi-country support</span>
                </article>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
