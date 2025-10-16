"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./header.module.css";

export default function Header({ scrolled, isMobile, isOpen, setIsOpen, setScrolled }) {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleNavClick = (sectionId) => {
    if (isHome) {
      const el = document.querySelector(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${sectionId}`);
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

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
              <Link href={isHome ? "#" : "/#"} className='logo'>
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
                  <Link href={isHome ? "#" : "/#"} className={styles.nav__logo_mobile}>
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
                <li
                  className={styles.nav__item}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    handleNavClick("#about");
                  }}
                >
                  Really? Another Social App
                </li>
                <li
                  className={styles.nav__item}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    handleNavClick("#create");
                  }}
                >
                  How To Master Bubble
                </li>
                <li
                  className={styles.nav__item}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    handleNavClick("#faq");
                  }}
                >
                  F&Q
                </li>
                <li
                  className={styles.nav__item}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    handleNavClick("#partners");
                  }}
                >
                  Partners
                </li>
                <div className={`${styles.nav__buttons_mobile} ${isOpen ? styles["nav__buttons--open"] : ""}`}>
                  <a href='/partners' className={`${styles.nav__button} ${styles["nav__button--ghost"]}`}>
                    Advertise on Bubble
                  </a>
                  <span
                    onClick={() => handleNavClick("#app")}
                    className={`${styles.nav__button} ${styles["nav__button--filled"]}`}
                  >
                    Get the app
                  </span>
                </div>
              </ul>
            </div>
            {/* buttons */}
            <div className={styles.nav__buttons}>
              <a href='/partners' className={`${styles.nav__button} ${styles["nav__button--ghost"]}`}>
                Advertise on Bubble
              </a>
              <span
                onClick={() => handleNavClick("#partners")}
                className={`${styles.nav__button} ${styles["nav__button--filled"]}`}
              >
                Get the app
              </span>
            </div>
          </motion.nav>
        </header>
      </div>
    </>
  );
}
