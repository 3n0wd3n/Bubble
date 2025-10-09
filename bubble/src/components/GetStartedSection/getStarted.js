"use client";
import Image from "next/image";
import styles from "./getStarted.module.css";
import { motion } from "framer-motion";

export default function getStarted() {
  return (
    <>
      {/* get started */}
      <section id='partners' className={styles.get_start_section}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Get Started
        </motion.h2>

        <div className={styles.get_start__card_container}>
          <motion.article
            className={`${styles.get_start__card} ${styles["get_start__card--partner"]}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.get_start__card_content}>
              <h3>Partner with Bubble</h3>
              <p>
                By joining the Bubble, you unlock the ability to advertise your brand, access exclusive growth features,
                and build connections with our community.
              </p>
            </div>
            <a href='#' className={styles.get_start__card_link}>
              Get Started
              <Image
                src='/FaArrowRight.svg'
                alt='SVG Arrow'
                width={16}
                height={16}
                className={styles.get_start__link_icon}
              />
            </a>
          </motion.article>
          <motion.article
            className={`${styles.get_start__card} ${styles["get_start__card--user"]}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.get_start__card_content}>
              <h3>Be part of the Bubble</h3>
              <p>
                Enjoy our new and unique view to the photos and videos and share this excitement with your friends and
                followers.
              </p>
            </div>
            <a href='#' className={styles.get_start__card_link}>
              Get Started
              <Image
                src='/FaArrowRight.svg'
                alt='SVG Arrow'
                width={16}
                height={16}
                className={styles.get_start__link_icon}
              />
            </a>
          </motion.article>
        </div>
      </section>
    </>
  );
}
