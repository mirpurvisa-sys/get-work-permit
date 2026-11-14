import {Plane} from 'lucide-react';
import styles from './PhotoCollage.module.css';
export function PhotoCollage({images=['/services/new-zealand.jpg','/services/italy.jpg','/services/canada.jpg']}: {images?:string[]}){return <div className={styles.collage}><img src={images[0]} alt="International destination" width="500" height="700"/><img src={images[1]} alt="Destination architecture" width="500" height="400"/><img src={images[2]} alt="Planning an international journey" width="650" height="420"/><span aria-hidden="true"><Plane size={24}/></span></div>}
