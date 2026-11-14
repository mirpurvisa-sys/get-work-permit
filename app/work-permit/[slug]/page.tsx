import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowUpRight,Check,FileCheck2,CalendarDays,HeartPulse,Clock3} from 'lucide-react';
import {workPermitRoutes} from '@/lib/workPermitRoutes';
import styles from '../routes.module.css';
const photos:Record<string,string>={'turkey-electricians':'/services/turkey.jpg','azerbaijan-construction':'/services/global-support.jpg','sweden-job-seeker':'/home/home-hero-airplane.jpg','italy-freelancer':'/services/italy.jpg'};
export function generateStaticParams(){return workPermitRoutes.map(({slug})=>({slug}))}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = workPermitRoutes.find(item => item.slug === slug);
  return {
    title: route ? `${route.country} - ${route.title}${route.status === 'coming-soon' ? ' - Coming soon' : ''} | GetWorkPermits` : 'Route not found',
    description: route?.route,
  };
}
export default async function RoutePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const r=workPermitRoutes.find(r=>r.slug===slug);if(!r)notFound();
 const comingSoon=r.status==='coming-soon';
 const actionLabel=comingSoon?'Register interest':'Request a consultation';
 const sectionSource=(url:string)=>r.sources?.find(source=>source.url===url);
 return <article className={styles.detail}>
 <header className={styles.hero}><div className={styles.heroCopy}><Link className={styles.back} href="/work-permit">Work Permit / {r.country}</Link><p className={styles.kicker}>{r.country}</p><h1>{r.title}</h1>{comingSoon&&<span className={styles.statusBadge}><Clock3 size={13}/>Coming soon</span>}<p>{r.route}</p><Link className={styles.button} href={`/contact?route=${r.slug}#consultation`}>{actionLabel} <ArrowUpRight size={16}/></Link></div><div className={styles.heroPhoto}>{comingSoon?<div className={styles.detailHealthVisual}><HeartPulse size={90} strokeWidth={1}/><strong>Ireland</strong><p>Healthcare Assistant</p></div>:<img src={photos[r.slug]} alt={`${r.country} route planning`} width="900" height="650"/>}<span><CalendarDays size={17}/>{r.validity}</span></div></header>
 {comingSoon&&<aside className={styles.comingSoonNotice}><strong>Coming soon at GetWorkPermits</strong><p>{r.statusNote}</p></aside>}
 <aside className={styles.disclaimer}>{r.checkedOn?<>Official sources checked on {r.checkedOn}. This is a preparation guide; confirm the complete, current requirements with the relevant authority and employer.</>:'Information supplied for this project; not independently verified against current immigration rules. Confirm requirements with the relevant authority or consulate before applying.'}</aside>
 <div className={styles.detailLayout}><nav className={styles.contents} aria-label="Route sections"><span>{r.country}</span><a href="#eligibility">01 / Eligibility</a><a href="#documents">02 / Document checklist</a><a href="#process">03 / Application process</a><a href="#timing">04 / Validity and timing</a>{r.sections?.map(section=><a key={section.id} href={`#${section.id}`}>{section.title}</a>)}<a href="#before-you-proceed">Before you proceed</a>{r.sources&&<a href="#official-sources">Official sources</a>}</nav><div className={styles.article}>
 <section id="eligibility"><span className={styles.sectionNumber}>01</span><h2>Eligibility</h2>{r.overview&&<p>{r.overview}</p>}<ul className={styles.checklist}>{r.eligibility.map(x=><li key={x}><Check size={16}/><span>{x}</span></li>)}</ul></section>
 <section id="documents"><span className={styles.sectionNumber}>02</span><h2>{comingSoon?'Employment permit documents':'Document checklist'}</h2><ul className={styles.checklist}>{r.documents.map(x=><li key={x}><FileCheck2 size={16}/><span>{x}</span></li>)}</ul></section>
 <section id="process"><span className={styles.sectionNumber}>03</span><h2>Application process</h2><ol className={styles.steps}>{r.steps.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></li>)}</ol></section>
 <section id="timing"><span className={styles.sectionNumber}>04</span><h2>Validity and timing</h2><div className={styles.timing}><CalendarDays size={22}/><p>{r.validity}</p></div><p>{r.processing}</p>{'renewal' in r&&<p>{r.renewal}</p>}{'quota' in r&&<p>{r.quota}</p>}</section>
 {r.sections?.map(section=><section id={section.id} key={section.id}><h2>{section.title}</h2><ul className={styles.checklist}>{section.items.map(item=><li key={item}><Check size={16}/><span>{item}</span></li>)}</ul><div className={styles.sectionSources}>Official guidance: {section.sources.map(url=><a key={url} href={url} target="_blank" rel="noopener noreferrer">{sectionSource(url)?.label??'Official source'} <ArrowUpRight size={11}/></a>)}</div></section>)}
 <section id="before-you-proceed"><span className={styles.sectionNumber}>05</span><h2>Before you proceed</h2><p>{r.limitations}</p>{!comingSoon&&<p>Government fees, service charges, salary figures, numerical income or funds thresholds, and employer vacancies are not specified in this guide.</p>}</section>
 {r.sources&&<section id="official-sources"><h2>Official sources</h2><p>Reviewed {r.checkedOn}. Requirements may change; use the authority checklists before applying.</p><ul className={styles.sourceList}>{r.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<ArrowUpRight size={14}/></a></li>)}</ul></section>}
 <div className={styles.consult}><h2>{comingSoon?'Interested in this upcoming service?':'Request a consultation'}</h2>{comingSoon&&<p>Our Ireland service is not open for applications. You can prepare an interest enquiry for our team.</p>}<Link className={styles.button} href={`/contact?route=${r.slug}#consultation`}>{actionLabel} <ArrowUpRight size={16}/></Link><p>{comingSoon?'Registering interest does not submit an employment permit or visa application.':'A consultation enquiry does not submit a government visa application.'}</p></div>
 </div></div></article>
}
