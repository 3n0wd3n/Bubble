"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import { motion } from "framer-motion";

export default function contact() {
  return (
    <>
      <section className={styles.contact_section}>
        <motion.header
          className={styles.contact__header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={`${styles.tagline} ${styles["tagline--light"]}`}>Connect</span>
          <h2>Contact us</h2>
          <p>We’re here to help you start your bubble-sharing journey and answer any questions.</p>
        </motion.header>
        <address className={styles.contact__info}>
          <motion.div
            className={styles.contact__info_item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image src='/mail.svg' alt='SVG Arrow' width={24} height={24} className={styles.get_start__link_icon} />
            <p className={styles.contact__item_content}>
              <strong>Email:</strong>
              <a href='mailto:support@memoriesapp.com'>support@bubble.com</a>
            </p>
          </motion.div>
          <motion.div
            className={styles.contact__info_item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image src='/call.svg' alt='SVG Arrow' width={24} height={24} className={styles.get_start__link_icon} />
            <p className={styles.contact__item_content}>
              <strong>Phone:</strong>
              <a href='tel:+61281234567'>+61 2 8123 4567</a>
            </p>
          </motion.div>
          <motion.div
            className={styles.contact__info_item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src='/location_on.svg'
              alt='SVG Arrow'
              width={24}
              height={24}
              className={styles.get_start__link_icon}
            />
            <p className={styles.contact__item_content}>
              <strong>Office:</strong>
              Level 5, 123 Digital Lane, Sydney NSW 2000, Australia
            </p>
          </motion.div>
        </address>
      </section>
    </>
  );
}
