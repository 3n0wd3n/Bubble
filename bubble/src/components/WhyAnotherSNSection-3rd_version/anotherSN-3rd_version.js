"use client";
import Image from "next/image";
import styles from "./anotherSN-3rd-version.module.css";
import { motion } from "framer-motion";

export default function anotherSN() {
  return (
    <>
      {/* about - why would they need us */}
      <section id='about' className={styles.about}>
        {/* general container */}
        <div className={`${styles["container--about"]}`}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Why would you need another social network?
          </motion.h2>
          <div className={styles.about__container}>
            <motion.article
              className={styles.about__item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>Share memories in unique way</p>
              <Image src='/delimiter.png' alt='Share icon' width={142} height={1} />
              <p>Capture moments exactly where they happen and decide who can unlock them.</p>
            </motion.article>
            <motion.article
              className={styles.about__item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>Explore Stories Left By Others</p>
              <Image src='/delimiter.png' alt='Share icon' width={142} height={1} />
              <p>Explore memories waiting to be found and uncover stories tied to meaningful locations.</p>
            </motion.article>
            <motion.article
              className={styles.about__item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>Bring Excitement To Everyday Life</p>
              <Image src='/delimiter.png' alt='Share icon' width={142} height={1} />
              <p>Leave surprises nearby and explore new spots to turn everyday places into adventures.</p>
            </motion.article>
            <motion.article
              className={styles.about__item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>Transform Space To Adventures</p>
              <Image src='/delimiter.png' alt='Share icon' width={142} height={1} />
              <p>Create a digital time capsule that connects people through shared experiences and locations.</p>
            </motion.article>
          </div>
        </div>
      </section>
    </>
  );
}
