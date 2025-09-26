import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* header */}
      <header className={styles.header}>
        {/* navigation */}
        <nav className={styles.nav}>
          <div className={styles.nav__container}>
            {/* logo */}
            <Link href='/' className='logo'>
              <Image src='/logo_nav.png' alt='Bubble logo' width={48} height={48} />
            </Link>
            {/* links */}
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a href='#'>Really? Another Social App</a>
              </li>
              <li className={styles.nav__item}>
                <a href='#'>How To Master Bubble</a>
              </li>
              <li className={styles.nav__item}>
                <a href='#'>F&Q</a>
              </li>
              <li className={styles.nav__item}>
                <a href='#'>Partners</a>
              </li>
            </ul>
          </div>
          {/* buttons */}
          <div className={styles.nav__buttons}>
            <a href='#' className={`${styles.nav__button} ${styles["nav__button--ghost"]}`}>
              Advertise on Bubble
            </a>
            <a href='#' className={`${styles.nav__button} ${styles["nav__button--filled"]}`}>
              Get the app
            </a>
          </div>
        </nav>
      </header>
      {/* main */}
      <main className={styles.main}>
        {/* intro */}
        <section>
          <h1></h1>
          <p></p>
        </section>
        {/* about - why would they need us */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* usage - create bubble */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* usage - observe photos of others */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* usage - share, follow, explore */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* download app with qr */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* f&q */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* get started */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* contact us */}
        <section>
          <h2></h2>
          <p></p>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
