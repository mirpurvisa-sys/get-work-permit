import {PhotoCollage} from './PhotoCollage';
import styles from './InnerPageHero.module.css';
type InnerPageHeroProps={eyebrow:string;title:string;lead:string;backgroundImage:string};
export function InnerPageHero({eyebrow,title,lead,backgroundImage}:InnerPageHeroProps){
 const image=backgroundImage.startsWith('/')?backgroundImage:eyebrow==='Blog'?'/services/process-planning.jpg':eyebrow==='FAQ'?'/contact/contact-support-laptop.webp':'/services/global-support.jpg';
 return <section className={styles.hero}><div className={styles.inner}><div className={styles.copy}><p className={styles.breadcrumb}>GetWorkPermits / {eyebrow}</p><span className={styles.eyebrow}>{eyebrow}</span><h1>{title}</h1><p>{lead}</p></div><PhotoCollage images={[image,'/services/italy.jpg','/services/canada.jpg']}/></div></section>
}
