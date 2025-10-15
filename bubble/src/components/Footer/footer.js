"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      {/* footer */}
      <footer className={styles.footer}>
        {/* general container */}
        <div className={`${styles["container--footer"]}`}>
          <motion.div
            className={styles.footer__nav_container}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <nav className={styles.footer__nav}>
              {/* logo */}
              <Link href='#' className='logo'>
                <Image src='/logo_nav.png' alt='Bubble logo' width={48} height={48} />
              </Link>
              <div className={styles.footer__nav_item}>
                <h3>Product</h3>
                <ul className={styles.footer__nav_links}>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Features</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Download</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Pricing</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Updates</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footer__nav_item}>
                <h3>Company</h3>
                <ul className={styles.footer__nav_links}>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>About us</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Careers</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Press</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Contact</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Blog</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footer__nav_item}>
                <h3>Resources</h3>
                <ul className={styles.footer__nav_links}>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Help center</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Support</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Community</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Developers</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Subscribe</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className={styles.footer__newsletter}>
              <header className={styles.footer__newsletter_header}>
                <h3>Newsletter</h3>
                <p>Stay updated on new features and community stories.</p>
              </header>
              <div className={styles.footer__newsletter_form}>
                <form className={styles.footer__form_content} action='/subscribe' method='post'>
                  <input
                    className={styles.footer__form_input}
                    type='email'
                    id='newsletter-email'
                    name='email'
                    placeholder='Enter your email address'
                    required
                  />
                  <button className={styles.footer__form_submit} type='submit'>
                    Subscribe
                  </button>
                </form>
                <p>
                  By subscribing, you agree to our <a href='/privacy'>privacy policy</a> and{" "}
                  <a href='#'>terms of service</a>.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.footer__bottom}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.footer__bottom_legal_container}>
              <p>© 2025 Bubble App. All rights reserved.</p>
              <ul className={styles.footer__bottom_legal}>
                <li>
                  <a href='#'>Privacy policy</a>
                </li>
                <li>
                  <a href='#'>Terms of service</a>
                </li>
                <li>
                  <a href='#'>Cookie settings</a>
                </li>
              </ul>
            </div>
            <ul className={styles.footer__bottom_social}>
              <li>
                <Link href='/' className='logo'>
                  <Image src='/Facebook.svg' alt='FB logo' width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href='/' className='logo'>
                  <Image src='/Instagram.svg' alt='IG logo' width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href='/' className='logo'>
                  <Image src='/X.svg' alt='X logo' width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href='https://www.linkedin.com/company/bubble2025/' className='logo'>
                  <Image src='/LinkedIn.svg' alt='LinkedIn logo' width={24} height={24} />
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
