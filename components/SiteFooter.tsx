import Link from "next/link";
import {Plane,ArrowUpRight} from "lucide-react";
import styles from "./SiteFooter.module.css";

const pages = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Countries", "/countries"],
  ["Our Process", "/how-it-works"],
  ["Work Permit", "/work-permit"],
  ["Blog", "/blog"],
];

const legal = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-conditions"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandRow}><Link href="/" className={styles.brand}><Plane size={24}/><strong>GetWorkPermits</strong></Link><a href="mailto:support@getworkpermits.com">support@getworkpermits.com <ArrowUpRight size={14}/></a></div>
        <div className={styles.linksRow}>
          <div className={styles.stack}>
            <h4>Pages</h4>
            {pages.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>

          <div className={styles.stack}>
            <h4>Resources</h4>
            <Link href="/services">Services Overview</Link>
            <Link href="/countries">Explore Countries</Link>
            <Link href="/blog">Latest Guidance</Link>
            <Link href="/how-it-works">Our Process</Link>
          </div>

          <div className={styles.stack}>
            <h4>Support</h4>
            {legal.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>

          <div className={styles.stack}>
            <h4>Contact</h4>
            <p>support@getworkpermits.com</p>
            <p>Mon - Sat</p>
            <p>Advisory support for global work permit planning</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 GetWorkPermits. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
