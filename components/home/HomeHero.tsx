"use client";
import Link from "next/link";
import {useState} from "react";
import {ArrowUpRight, Plane, Sparkles} from "lucide-react";
import styles from "./HomeHero.module.css";
type HeroSlide = { badge:string; title:string; text:string; image:string };
const heroSlides: HeroSlide[] = [
  {
    badge: "Clear Work Permit Planning",
    title: "Find the right work permit path with clearer expert guidance",
    text: "Compare destinations, understand your best-fit route, and move forward with practical support before you commit time and money.",
    image: "/home/home-hero-airplane.jpg",
  },
  {
    badge: "Global Work Permit Specialists",
    title: "Build your overseas career with confident step-by-step support",
    text: "From country selection to application readiness, GetWorkPermits helps professionals navigate international opportunities with more confidence.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
  },
  {
    badge: "Fast And Transparent Support",
    title: "Move from uncertainty to action with faster permit planning",
    text: "Explore work permits across leading destinations with expert advice, practical next steps, and a smoother route to action.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80",
  },
];

export function HomeHero(){
 const [active,setActive]=useState(0);
 const slide=heroSlides[active];
 return <>
 <section className={styles.hero}>
  <div className={styles.inner}>
   <div className={styles.copy}>
    <p className={styles.eyebrow}>{slide.badge}</p>
    <h1>{slide.title}<Sparkles className={styles.sparkle} size={30} aria-hidden="true" /></h1>
    <p className={styles.description}>{slide.text}</p>
    <div className={styles.actions}><Link href="/contact" className={styles.primary}>Free Consultation <ArrowUpRight size={17}/></Link><svg className={styles.sketch} viewBox="0 0 100 45" fill="none" aria-hidden="true"><path d="M4 14C35-4 68 12 43 21C21 28 38-3 88 32M73 31L89 33L85 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg></div>
    <div className={styles.pagination} aria-label="Work permit guidance topics">{heroSlides.map((item,index)=><button type="button" key={item.badge} onClick={()=>setActive(index)} aria-label={`Show ${item.badge}`} aria-pressed={active===index} className={active===index?styles.selected:''}>{String(index+1).padStart(2,'0')}</button>)}</div>
   </div>
   <div className={styles.collage}>
    <img className={styles.photoTall} src="/services/new-zealand.jpg" alt="Landscape and homes in New Zealand" width="600" height="800" fetchPriority="high"/>
    <img className={styles.photoCity} src="/services/italy.jpg" alt="Architecture in Italy" width="600" height="450"/>
    <span className={styles.flightIcon} aria-hidden="true"><Plane size={25}/></span>
    <span className={styles.orbit} aria-hidden="true"/>
   </div>
  </div>
 </section>
 <section className={styles.intro}>
  <div className={styles.introCollage}>
   <img className={styles.nature} src="/services/new-zealand.jpg" alt="Explore new destinations" width="500" height="650" loading="lazy"/>
   <div className={styles.coverage}><strong>12+</strong><span>Coverage<br/>destinations</span></div>
   <img className={styles.team} src="/services/advisory-team.jpg" alt="Professional advisory team" width="500" height="650" loading="lazy"/>
   <div className={styles.stamp}><Plane size={28}/><span>GLOBAL WORK<br/>PERMIT PLANNING</span></div>
  </div>
  <div className={styles.introCopy}>
   <p className={styles.eyebrow}>Why GetWorkPermits</p>
   <h2>Smarter guidance for professionals planning to work abroad.</h2>
   <p>We combine expert advisory, documentation support, and practical country guidance so applicants can move faster with fewer mistakes.</p>
   <div className={styles.features}>
    <article><span className={styles.icon}><Plane size={22}/></span><h3>Experts + AI</h3><p>Support</p><span>✓ Style: Clear process</span></article>
    <article><span className={styles.icon}><Sparkles size={22}/></span><h3>Faster decisions</h3><p>Goal</p><span>✓ Clear process</span></article>
   </div>
   <a className={styles.email} href="mailto:support@getworkpermits.com"><span className={styles.icon}>↗</span><span><small>Support</small><strong>support@getworkpermits.com</strong></span></a>
  </div>
 </section>
 </>;
}
