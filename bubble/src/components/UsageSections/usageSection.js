// src/components/UsageSection.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../components/UsageSections/usageSection.module.css";

export default function UsageSection({ number, tagline, title, subtitle, text, image, reverse = false, sectionClass }) {
  return (
    <section className={sectionClass}>
      <div className={styles.container}>
        <motion.span
          className={styles.tagline}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {number} {tagline}
        </motion.span>

        <div className={`${styles.content} ${reverse ? styles.reverse : ""}`}>
          <div className={styles.text}>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {subtitle}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {text}
            </motion.p>
          </div>

          <motion.div
            className={styles.image}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image src={image} alt={title} width={600} height={700} style={{ width: "100%", height: "auto" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
