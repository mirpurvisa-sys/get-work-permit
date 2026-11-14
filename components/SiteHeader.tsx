"use client";

import Link from "next/link";
import {Plane,ArrowUpRight} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

const nav = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Countries", "/countries"],
  ["Work Permit", "/work-permit"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}><Plane size={26} strokeWidth={1.8}/></span>
            <span className={styles.brandText}>
              <strong>GetWorkPermits</strong>
              <small>Global Employment Platform</small>
            </span>
          </Link>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>

          <nav aria-label="Main navigation" id="main-navigation" className={`${styles.navWrap} ${menuOpen ? styles.navWrapOpen : ""}`}>
            <div className={styles.nav}>
              {nav.map(([label, href]) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            <Link href="/contact" className={styles.action}>
              Get Consultation <ArrowUpRight size={14}/>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
