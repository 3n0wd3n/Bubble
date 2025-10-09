"use client";
import Image from "next/image";
import styles from "./faq.module.css";
import { motion } from "framer-motion";

export default function faq() {
  return (
    <>
      <section id='faq' className={styles.faq_section}>
        <div className={styles.faq__heading}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            FAQs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Get answers to common questions about our Bubble platform.
          </motion.p>
        </div>
        <div className={styles.faq__rows_container}>
          <motion.div
            className={styles.faq__row}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <article className={styles.faq__row_item}>
              <Image src='/IoAddCircleOutline.svg' alt='Share icon' width={48} height={48} />
              <h5>How do I create a bubble?</h5>
              <p>
                Select a location from your trips or be in the spot, upload a photo or video, and add your story
                details.
              </p>
            </article>
            <article className={styles.faq__row_item}>
              <Image src='/enhanced_encryption.svg' alt='Share icon' width={48} height={48} />
              <h5>Is my data secure?</h5>
              <p>We use advanced encryption to protect your personal bubbles.</p>
            </article>
            <article className={styles.faq__row_item}>
              <Image src='/share_location.svg' alt='Location icon' width={48} height={48} />
              <h5>Can I share bubbles privately?</h5>
              <p>Yes, you can control who sees your location-based selecting right people.</p>
            </article>
          </motion.div>
          <motion.div
            className={styles.faq__row}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <article className={styles.faq__row_item}>
              <Image src='/apps.svg' alt='Apps icon' width={48} height={48} />
              <h5>Is the app free?</h5>
              <p>Basic features are free, with premium options available.</p>
            </article>
            <article className={styles.faq__row_item}>
              <Image src='/IoInfiniteOutline.svg' alt='Infinite icon' width={48} height={48} />
              <h5>How many bubbles can I create?</h5>
              <p>Unlimited memories with our standard and premium plans.</p>
            </article>
            <article className={styles.faq__row_item}>
              <Image src='/android.svg' alt='Android icon' width={48} height={48} />
              <h5>Works on which devices?</h5>
              <p>Available on iOS and Android mobile devices.</p>
            </article>
          </motion.div>
        </div>
      </section>
    </>
  );
}
