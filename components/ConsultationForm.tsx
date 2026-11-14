"use client";
import {useEffect,useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {workPermitRoutes} from '@/lib/workPermitRoutes';
import styles from './ConsultationForm.module.css';
export function ConsultationForm(){
 const [route,setRoute]=useState('');
 const [prepared,setPrepared]=useState(false);
 const selectedRoute=workPermitRoutes.find(item=>item.slug===route);
 const comingSoon=selectedRoute?.status==='coming-soon';
 useEffect(()=>{const selected=new URLSearchParams(window.location.search).get('route');if(selected&&workPermitRoutes.some(r=>r.slug===selected))setRoute(selected)},[]);
 return <form id="consultation" className={styles.form} onSubmit={event=>{event.preventDefault();const fields=new FormData(event.currentTarget);const chosen=workPermitRoutes.find(r=>r.slug===fields.get('Route'));if(chosen)fields.set('Route',`${chosen.country} - ${chosen.title}${chosen.status==='coming-soon'?' (Coming soon - interest enquiry only)':''}`);if(chosen?.status==='coming-soon')fields.set('Enquiry type','Interest only - service not yet open for applications');const body=Array.from(fields.entries()).map(([key,value])=>`${key}: ${value}`).join('\n');window.location.href=`mailto:support@getworkpermits.com?subject=${encodeURIComponent(comingSoon?'Ireland healthcare assistant - coming-soon interest enquiry':'Work permit consultation enquiry')}&body=${encodeURIComponent(body)}`;setPrepared(true)}}>
 <div className={styles.header}><span>{comingSoon?'Coming-soon service enquiry':'Consultation request'}</span><h2>Tell us what kind of help you need.</h2><p>Share the essentials and our team will have a much better starting point for the conversation.</p></div>
 <div className={styles.grid}>
 <label>Full name<input name="Full name" placeholder="Your full name" autoComplete="name" required/></label>
 <label>Email address<input name="Email" type="email" placeholder="you@example.com" autoComplete="email" required/></label>
 <label className={styles.full}>Country of interest<select name="Route" required value={route} onChange={e=>setRoute(e.target.value)}><option value="" disabled>Select a route</option>{workPermitRoutes.map(r=><option value={r.slug} key={r.slug}>{r.country} - {r.title}{r.status==='coming-soon'?' (Coming soon - interest only)':''}</option>)}<option value="Other destination enquiry">Other destination enquiry</option></select></label>
 <label className={styles.full}>Professional background<input name="Professional background" placeholder="Your current role or field"/></label>
 <label className={styles.full}>Your message<textarea name="Message" required placeholder="Tell us what stage you are at, what country you are considering, and what you want clarity on." rows={3}/></label>
 </div>
 {comingSoon&&<p className={styles.interestNotice} role="status">Ireland healthcare assistant support is coming soon. This is an interest enquiry only; our service is not open for applications.</p>}
 <button type="submit">{comingSoon?'Prepare interest email':'Prepare consultation email'} <ArrowUpRight size={16}/></button>
 <p className={styles.note}>This opens your email app for review and sending. It does not submit a government visa application. Prefer direct email? Write to <a href="mailto:support@getworkpermits.com">support@getworkpermits.com</a>.</p>
 {prepared&&<p className={styles.status} role="status">Your email draft is ready in your email app. Review it and send it to complete your enquiry.</p>}
 </form>
}
