import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight,Globe2,ShieldCheck,Zap,Route,Mail,Check} from 'lucide-react';
import {HomeHero} from '@/components/home/HomeHero';
import {ServicesAxis} from '@/components/home/ServicesAxis/ServicesAxis';
import {ConsultationForm} from '@/components/ConsultationForm';
import {RouteDirectory} from '@/components/work-permit/RouteDirectory';
import styles from './page.module.css';
const countries = [
  "Italy",
  "Canada",
  "United Kingdom",
  "Portugal",
  "Poland",
  "Greece",
  "Bulgaria",
  "Japan",
];

const steps = [
  {
    number: "01",
    title: "Profile Review",
    text: "We assess your background, priorities, and preferred destinations before recommending the most practical direction.",
  },
  {
    number: "02",
    title: "Route Selection",
    text: "You get clearer guidance on the permit path that best matches your goals, timing, and professional profile.",
  },
  {
    number: "03",
    title: "Application Readiness",
    text: "We help you prepare the right information and documents so your next steps feel organized instead of overwhelming.",
  },
  {
    number: "04",
    title: "Ongoing Guidance",
    text: "You stay supported throughout the process with practical answers, progress clarity, and better decision-making.",
  },
];

const insights = [
  {
    category: "Strategy",
    title: "How to choose the right country for your work permit goals",
  },
  {
    category: "Guidance",
    title: "Application mistakes that delay progress for many applicants",
  },
  {
    category: "Planning",
    title: "What professionals should prepare before starting the process",
  },
];

export const metadata: Metadata = {
  title: "Get Work Permits | Premium Global Work Permit Advisory",
  description:
    "GetWorkPermits helps professionals explore international work permit opportunities with expert guidance, AI-powered support, and a premium advisory experience.",
};


export default function HomePage(){return <div className={styles.page}>
<HomeHero/>
<section className={styles.ribbonSection} aria-label="Our approach"><div className={styles.ribbon}><span>Work Permit</span><Globe2/><span className={styles.outline}>International mobility</span><Route/><span>Application Readiness</span><Globe2/><span className={styles.outline}>Expert-led support</span></div><div className={styles.ribbonTwo} aria-hidden="true"><span>Expert-led support</span><Route/><span className={styles.outline}>Clear next steps</span><Globe2/><span>Work Permit</span><Route/><span className={styles.outline}>International mobility</span></div></section>
<section className={styles.trustSection}><div className={styles.container}><div className={styles.trustGrid}>{[['Clarity First','Transparent guidance for applicants exploring international work opportunities.'],['Expert-Backed','Human advisory combined with modern support tools for faster, better decisions.'],['Global Focus','Support across top destinations with practical, career-focused recommendations.']].map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
<div id="work-permits"><RouteDirectory/></div>
<ServicesAxis/>
<section className={styles.destinationsSection}><div className={styles.container}><div className={styles.destinationLayout}>
<div className={styles.destinationPhotos}><img src="/services/italy.jpg" alt="Italy city destination" width="600" height="700" loading="lazy"/><div className={styles.destinationStat}><strong>{countries.length}</strong><span>Featured destinations</span></div></div>
<div className={styles.destinationCopy}><span className={styles.eyebrow}>Top destinations</span><h2>Explore countries where professionals are actively looking for better opportunities.</h2><p>Compare leading destinations, understand where your profile may fit best, and move forward with more confidence before starting the process.</p><div className={styles.countryIntro}><strong>{countries.length} featured destinations</strong><span>Updated guidance across work permit pathways</span></div><div className={styles.countryList}>{countries.map(c=><Link key={c} href="/countries"><Check size={13}/>{c}</Link>)}</div><Link className={styles.textLink} href="/countries">International mobility <ArrowUpRight size={15}/></Link><p className={styles.caption}>Practical guidance for professionals planning to work abroad with more clarity.</p></div>
</div></div></section>
<section className={styles.processSection}><div className={styles.container}><div className={styles.sectionHead}><span className={styles.eyebrow}>Process</span><h2>A clear process helps applicants move forward with more confidence.</h2><p>Every stage is structured to reduce uncertainty, improve preparation, and make the next decision easier to understand.</p></div><div className={styles.processLayout}><div className={styles.processPhoto}><img src="/our-process/process-support-team.webp" alt="Support team planning the next steps" width="700" height="650" loading="lazy"/><div className={styles.photoNote}><small>Support style</small><strong>Step-by-step clarity</strong><small>Readiness</small><span>Better preparation before every next move</span></div></div><div className={styles.steps}>{steps.map(step=><article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div></div></div></section>
<section className={styles.advisorySection}><div className={styles.container}><div className={styles.advisoryHead}><div><span className={styles.eyebrow}>Why choose us</span><h2>Guidance built around clarity, speed, and practical support.</h2></div><p>From early route comparison to application readiness and ongoing answers, the experience is designed to reduce guesswork and keep progress visible.</p></div><div className={styles.reasonGrid}>{[['Experience','Expert-led support',ShieldCheck],['Speed','Faster answers',Zap],['Process','Clear next steps',Route],['Focus','Real outcomes',Globe2]].map(([label,title,Icon])=>{const ReasonIcon=Icon as typeof Globe2;return <article key={String(label)}><span className={styles.reasonIcon}><ReasonIcon size={20}/></span><small>{String(label)}</small><h3>{String(title)}</h3></article>})}</div></div></section>
<section className={styles.insightsSection}><div className={styles.container}><div className={styles.sectionHead}><span className={styles.eyebrow}>Insights</span><h2>Practical guidance that helps applicants make better decisions earlier.</h2><p>Use our insights to compare destinations, avoid common mistakes, and prepare more effectively before you apply.</p></div><div className={styles.insightsGrid}>{insights.map((item,i)=><article key={item.title}><img src={['/services/portugal.jpg','/services/process-planning.jpg','/services/global-support.jpg'][i]} alt={item.category+' guidance'} width="600" height="400" loading="lazy"/><div><span className={styles.eyebrow}>{item.category}</span><h3>{item.title}</h3><Link className={styles.textLink} href="/contact">Discuss your case <ArrowUpRight size={15}/></Link></div></article>)}</div></div></section>
<section className={styles.consultSection}><div className={styles.consultGrid}><ConsultationForm/><div className={styles.consultCopy}><span className={styles.eyebrow}>Next step</span><h2>Start with a clearer plan for your international work permit journey.</h2><p>Speak with our team to explore your options, understand the process, and choose a route that fits your goals.</p><div className={styles.contactLine}><Mail size={20}/><a href="mailto:support@getworkpermits.com">support@getworkpermits.com</a></div><div className={styles.ctaActions}><Link href="/contact" className={styles.primaryButton}>Get Free Consultation <ArrowUpRight size={15}/></Link><Link href="/services" className={styles.textLink}>Explore Services <ArrowUpRight size={15}/></Link></div><svg className={styles.paperPlane} viewBox="0 0 120 100" fill="none" aria-hidden="true"><path d="M10 78C65 110 85 49 49 56C16 64 64 16 100 18M79 9L108 15L94 41L90 24L79 9Z" stroke="currentColor" strokeWidth="1.5"/></svg></div></div></section>
</div>}
