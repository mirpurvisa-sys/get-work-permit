"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./HomeServicesInteractive.module.css";

const services = [
  {
    number: "01",
    title: "Work Permit Planning",
    text: "Find the right route before you commit time and money. We help applicants compare destinations, pathways, and profile fit so they can move forward with more confidence and less guesswork.",
    href: "/services",
  },
  {
    number: "02",
    title: "Documentation Support",
    text: "Build stronger applications with clearer preparation. From document guidance to readiness checks, we help reduce avoidable mistakes and make the process easier to manage.",
    href: "/services",
  },
  {
    number: "03",
    title: "Expert + AI Advisory",
    text: "Move faster without losing real human insight. Get quick responses where speed matters, backed by practical advisory for decisions that shape your international future.",
    href: "/services",
  },
];

export function HomeServicesInteractive() {
  const [active, setActive] = useState(1);

  return (
    <section className={styles.wrap}>
      <div className={styles.head}>
        <span className={styles.eyebrow}>Premium support</span>
        <h2>Interactive service experience with motion and depth.</h2>
        <p>
          Explore your core advisory services through expanding panels with a more premium,
          rounded, and modern interaction style.
        </p>
      </div>

      <div className={styles.row}>
        {services.map((service, index) => {
          const isActive = active === index;

          return (
            <motion.article
              key={service.title}
              className={styles.card}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              animate={{ flex: isActive ? 2.25 : 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              tabIndex={0}
            >
              <div className={`${styles.bg} ${styles["bg" + index]}`} />
              <div className={styles.overlay} />

              <div className={styles.shell}>
                <div className={styles.topLine}>
                  <span className={styles.number}>{service.number}</span>
                  <span className={styles.arrow}>↗</span>
                </div>

                <div className={styles.content}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <div className={`${styles.marqueeWrap} ${isActive ? styles.marqueeVisible : ""}`}>
                    <div className={styles.marqueeTrack}>
                      <span>{service.title}</span>
                      <span>{service.title}</span>
                      <span>{service.title}</span>
                    </div>
                  </div>

                  <Link href={service.href} className={styles.link}>
                    Explore More
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}