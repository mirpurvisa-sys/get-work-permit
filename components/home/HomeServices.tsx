"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./HomeServices.module.css"
import { useState } from "react"

const items = [
  {
    title: "Expert Guidance",
    text: "Get support from experienced visa professionals tailored to your country and profession.",
    href: "/services",
  },
  {
    title: "AI Assistance",
    text: "Receive instant answers, document checks, and step-by-step support for your application.",
    href: "/work-permit",
  },
  {
    title: "Transparent Process",
    text: "Clear instructions with no hidden fees so every stage stays understandable and practical.",
    href: "/how-it-works",
  },
]

export function HomeServices() {
  const [active, setActive] = useState(0)

  return (
    <section className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.kicker}>Visa Category</div>
        <h2>Outstanding Work Permit Services</h2>
      </div>

      <div className={styles.row}>
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className={styles.card}
            onHoverStart={() => setActive(index)}
            animate={{
              flex: active === index ? 3 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className={`${styles.bg} ${styles["bg" + index]}`} />

            <div className={styles.overlay} />

            <motion.div
              className={styles.content}
              animate={{
                opacity: active === index ? 1 : 0.7,
                y: active === index ? 0 : 20,
              }}
              transition={{ duration: 0.4 }}
            >
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              {active === index && (
                <Link href={item.href} className={styles.link}>
                  Explore →
                </Link>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}