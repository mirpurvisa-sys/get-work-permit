import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  CircleCheckBig,
  ClipboardList,
  Compass,
  FileCheck2,
  Globe2,
  MessageSquareMore,
  ShieldCheck,
} from 'lucide-react'

import { ScrollFlipPanel } from '@/components/home/ScrollFlipPanel'
import { ScrollReveal } from '@/components/home/ScrollReveal'

import styles from './HowTimeline.module.css'

const steps = [
  {
    step: '01',
    title: 'Explore the right destination first',
    text:
      'Start by comparing countries, role types, and route fit so your next step is based on a realistic direction instead of guesswork.',
    note: 'Country fit, route type, and timing are usually the first three questions that matter.',
  },
  {
    step: '02',
    title: 'Prepare your information with structure',
    text:
      'Once the route is clearer, gather the documents and details needed to review your profile properly and reduce avoidable mistakes early.',
    note: 'Clean preparation makes expert review, employer alignment, and document checks much easier.',
  },
  {
    step: '03',
    title: 'Move forward with guidance and follow-through',
    text:
      'After the route is confirmed, the process becomes more manageable because you know what to do next, what to expect, and where support fits in.',
    note: 'Clarity around the next move is often what turns a slow process into a workable one.',
  },
]

const supportItems = [
  {
    icon: Compass,
    title: 'Route clarity before commitment',
    text:
      'We help you understand which country and work permit path is more practical before you spend time in the wrong direction.',
  },
  {
    icon: FileCheck2,
    title: 'Preparation that feels organized',
    text:
      'Applicants get clearer support around information, documents, and what usually matters at each stage of the process.',
  },
  {
    icon: Bot,
    title: 'Faster answers during uncertainty',
    text:
      'AI-assisted guidance and expert review help reduce the waiting, confusion, and repeated second-guessing that slow many applicants down.',
  },
]

const stageNotes = [
  {
    icon: ClipboardList,
    title: 'Before you begin',
    text: 'Know the destination, role type, and the permit route you are likely to follow.',
  },
  {
    icon: MessageSquareMore,
    title: 'During review',
    text: 'Use feedback early so document issues and weak assumptions are caught before they become delays.',
  },
  {
    icon: ShieldCheck,
    title: 'Before submission',
    text: 'A more complete understanding of the route usually means a calmer and more confident final step.',
  },
]

export function HowTimeline() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <div className={styles.heroGridGlow} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <ScrollReveal as="span" className={`${styles.kicker}  `}>
                Our Process
              </ScrollReveal>

              <ScrollReveal className={` `} delay={90}>
                <h1>A clearer process for applicants who want to move forward with more confidence.</h1>
              </ScrollReveal>

              <ScrollReveal className={` `} delay={170}>
                <p>
                  The international work permit journey can feel overwhelming when you do not know
                  which route fits, which documents matter, or what the next real step should be.
                </p>
              </ScrollReveal>

              <ScrollReveal className={` `} delay={250}>
                <p>
                  Our process is designed to simplify that experience into a more practical flow:
                  compare first, prepare properly, and move into the next stage with clearer support.
                </p>
              </ScrollReveal>

              <ScrollReveal className={`${styles.heroActions}  `} delay={330}>
                <Link href="/contact" className={styles.primaryAction}>
                  Start consultation
                  <ArrowRight size={18} />
                </Link>
                <Link href="/services" className={styles.secondaryAction}>
                  Explore services
                </Link>
              </ScrollReveal>
            </div>

            <div className={styles.heroVisuals}>
              <ScrollFlipPanel className={styles.heroPanel}>
                <div className={styles.heroCard}>
                  <div className={styles.heroMedia}>
                    <Image
                      src="/our-process/guide-to-process-management.jpg"
                      alt="Applicant planning the next work permit step"
                      fill
                      sizes="(max-width: 1080px) 100vw, 420px"
                      className={`${styles.coverImage} ${styles.heroProcessImage}`}
                      priority
                    />
                    <div className={styles.mediaShade} />
                    <span className={styles.mediaTag}>Process snapshot</span>
                  </div>

                  <div className={styles.heroCardBody}>
                    <span className={styles.cardEyebrow}>Structured support</span>
                    <h2>Better decisions usually start with a clearer first step.</h2>
                    <p>
                      Compare the route, prepare the right details, and move through the process with
                      fewer avoidable surprises.
                    </p>
                  </div>
                </div>
              </ScrollFlipPanel>

              <div className={styles.heroStack}>
                {steps.map((item, index) => (
                  <ScrollReveal
                    key={item.step}
                    className={`${styles.heroMiniCard}  `}
                    delay={160 + index * 90}
                  >
                    <strong>{item.step}</strong>
                    <span>{item.title}</span>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.sectionIntro}  `} delay={40}>
            <span className={styles.sectionKicker}>Three clear stages</span>
            <h2>The process is simpler when each step has a clear purpose.</h2>
            <p>
              Instead of treating the application like one big unknown, break it into stages that
              help you compare, prepare, and move forward with more control.
            </p>
          </ScrollReveal>

          <div className={styles.stepsGrid}>
            {steps.map((item, index) => (
              <ScrollReveal
                key={item.step}
                as="article"
                className={`${styles.stepCard}  `}
                delay={100 + index * 90}
              >
                <div className={styles.stepTop}>
                  <div className={styles.stepNumber}>{item.step}</div>
                  <CircleCheckBig size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className={styles.stepNote}>{item.note}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.flowSection}>
        <div className={styles.container}>
          <div className={styles.flowGrid}>
            <ScrollFlipPanel className={styles.flowPanel}>
              <div className={styles.flowVisual}>
                <div className={styles.flowImage}>
                  <Image
                    src="/our-process/process-support-team.webp"
                    alt="Team discussion during the work permit planning process"
                    fill
                    sizes="(max-width: 1080px) 100vw, 560px"
                    className={styles.coverImage}
                  />
                  <div className={styles.mediaShade} />
                </div>

                <div className={styles.flowFloatingCard}>
                  <span className={styles.cardEyebrow}>What changes</span>
                  <strong>Confusion becomes a sequence of clearer next moves.</strong>
                </div>
              </div>
            </ScrollFlipPanel>

            <div className={styles.flowCopy}>
              <ScrollReveal className={`${styles.sectionIntro}  `} delay={70}>
                <span className={styles.sectionKicker}>What happens at each stage</span>
                <h2>Every stage exists to reduce uncertainty before the next decision.</h2>
                <p>
                  The goal is not just to move faster. It is to help you avoid wasted effort, weak
                  submissions, and late-stage confusion by making the process easier to understand.
                </p>
              </ScrollReveal>

              <div className={styles.noteGrid}>
                {stageNotes.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <ScrollReveal
                      key={item.title}
                      as="article"
                      className={`${styles.noteCard}  `}
                      delay={150 + index * 90}
                    >
                      <div className={styles.noteIcon}>
                        <Icon size={18} />
                      </div>
                      <div className={styles.noteContent}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.sectionIntro}  `} delay={40}>
            <span className={styles.sectionKicker}>Where we help</span>
            <h2>Support is designed to make the process feel more practical, not more complicated.</h2>
          </ScrollReveal>

          <div className={styles.supportGrid}>
            {supportItems.map((item, index) => {
              const Icon = item.icon

              return (
                <ScrollReveal
                  key={item.title}
                  as="article"
                  className={`${styles.supportCard}  `}
                  delay={110 + index * 90}
                >
                  <div className={styles.supportIcon}>
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <ScrollReveal className={`${styles.ctaPanel}  `} delay={60}>
            <div className={styles.ctaMain}>
              <div className={styles.ctaCopy}>
                <span className={styles.sectionKicker}>Ready to begin</span>
                <h2>Talk to our team and turn the process into a clearer, more manageable next step.</h2>
                <p>
                  If you are still deciding where to start, we can help you understand the route,
                  compare options, and move into preparation with better confidence.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Link href="/contact" className={styles.primaryAction}>
                  Speak with our team
                </Link>
                <Link href="/countries" className={styles.ghostAction}>
                  Compare countries
                </Link>
              </div>
            </div>

            <div className={styles.ctaBoard}>
              <article className={styles.ctaFeatureCard}>
                <span className={styles.ctaFeatureLabel}>Process outcome</span>
                <strong>A route that feels clearer before you commit time, effort, and documents.</strong>
              </article>

              <div className={styles.ctaStatGrid}>
                <article className={styles.ctaStat}>
                  <Compass size={18} />
                  <span>Route direction first</span>
                </article>
                <article className={styles.ctaStat}>
                  <Bot size={18} />
                  <span>AI-assisted answers</span>
                </article>
                <article className={styles.ctaStat}>
                  <Globe2 size={18} />
                  <span>Multi-country guidance</span>
                </article>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
