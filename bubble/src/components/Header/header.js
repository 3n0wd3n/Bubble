"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { motion } from "framer-motion";

export default function Header({ scrolled, isMobile, isOpen, setIsOpen, setScrolled }) {
  return (
    <>
      {/* general container */}
      <div className={`${styles["container--header"]}`}>
        {/* header */}
        <header className={styles.header}>
          {/* navigation */}
          <motion.nav
            className={`${styles.nav} ${scrolled ? styles["nav--scrolled"] : ""}`}
            initial={!isMobile ? { opacity: 0, y: 40 } : false}
            animate={!isMobile ? { opacity: 1, y: 0 } : false}
            transition={!isMobile ? { duration: 0.6, delay: 0.4 } : {}}
          >
            <div className={styles.nav__container}>
              {/* logo */}
              <Link href='#' className='logo'>
                <Image src='/logo_nav.png' alt='Bubble logo' width={48} height={48} />
              </Link>
              {/* hamburger */}
              <button className={styles.nav__toggle} onClick={() => setIsOpen(!isOpen)} aria-label='Toggle navigation'>
                <span />
                <span />
                <span />
              </button>
              {/* links */}
              <ul className={`${styles.nav__list} ${isOpen ? styles["nav__list--open"] : ""}`}>
                <div className={styles.nav__toggle_container}>
                  {/* logo */}
                  <Link href='#' className={styles.nav__logo_mobile}>
                    <Image src='/logo_nav.png' alt='Bubble logo' width={48} height={48} />
                  </Link>
                  <button
                    className={styles.nav__toggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label='Toggle navigation'
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
                <li className={styles.nav__item} onClick={() => setIsOpen(!isOpen)}>
                  <a href='#about'>Really? Another Social App</a>
                </li>
                <li className={styles.nav__item} onClick={() => setIsOpen(!isOpen)}>
                  <a href='#master'>How To Master Bubble</a>
                </li>
                <li className={styles.nav__item} onClick={() => setIsOpen(!isOpen)}>
                  <a href='#faq'>F&Q</a>
                </li>
                <li className={styles.nav__item} onClick={() => setIsOpen(!isOpen)}>
                  <a href='#partners'>Partners</a>
                </li>
                <div className={`${styles.nav__buttons_mobile} ${isOpen ? styles["nav__buttons--open"] : ""}`}>
                  <a href='#' className={`${styles.nav__button} ${styles["nav__button--ghost"]}`}>
                    Advertise on Bubble
                  </a>
                  <a href='#app' className={`${styles.nav__button} ${styles["nav__button--filled"]}`}>
                    Get the app
                  </a>
                </div>
              </ul>
            </div>
            {/* buttons */}
            <div className={styles.nav__buttons}>
              <a href='#' className={`${styles.nav__button} ${styles["nav__button--ghost"]}`}>
                Advertise on Bubble
              </a>
              <a href='#app' className={`${styles.nav__button} ${styles["nav__button--filled"]}`}>
                Get the app
              </a>
            </div>
          </motion.nav>
        </header>
      </div>
    </>
  );
}
