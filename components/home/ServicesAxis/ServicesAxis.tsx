import Link from 'next/link';
import {ArrowUpRight,BriefcaseBusiness,FileCheck2,Globe2} from 'lucide-react';
import styles from './ServicesAxis.module.css';
const items = [
  {
    number: "01",
    title: "Growth & Scale Advisory",
    text: "Find the right route before you commit time and money, with clearer guidance and better planning.",
    href: "/services",
    image: "/services/advisory-team.jpg",
  },
  {
    number: "02",
    title: "Digital Transformation Consulting",
    text: "Use expert support and modern tools to move faster without losing practical clarity.",
    href: "/services",
    image: "/services/global-support.jpg",
  },
  {
    number: "03",
    title: "Business Strategy Consulting",
    text: "Build stronger applications and decisions with structured support and transparent next steps.",
    href: "/services",
    image: "/services/process-planning.jpg",
  },
];


const icons=[BriefcaseBusiness,FileCheck2,Globe2];
export function ServicesAxis(){return <section className={styles.wrap}><div className={styles.inner}><div className={styles.top}><span className={styles.kicker}>Our Solutions</span><h2>Solutions Designed For Business Growth</h2><p>Enhance business efficiency and growth with modern, intelligent management and maximize performance.</p><Link href="/services">View All Services <ArrowUpRight size={14}/></Link></div><div className={styles.row}>{items.map((item,index)=>{const Icon=icons[index];return <article className={styles.card} key={item.number}><span className={styles.number}>{item.number}</span><Icon size={30} strokeWidth={1.3}/><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>Explore More <ArrowUpRight size={15}/></Link></article>})}</div></div></section>}
