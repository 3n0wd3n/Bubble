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
        <section className={styles.intro}>
          <div className={styles.intro__content}>
            <div className={styles.intro__heading_container}>
              <span>Bubble.</span>
              <h1>
                A new <span className={`${styles["outlined-text"]}`}>social network</span> where photos and videos are
                tied to real-world places
              </h1>
            </div>
            <p>
              Leave photos or videos at real locations and create stories waiting to be discovered. Every place becomes
              a canvas for your most meaningful moments.
            </p>
            <div className={styles.intro__buttons}>
              <a href='#' className={`${styles.intro__button} ${styles["intro__button--filled"]}`}>
                Get the app
              </a>
              <a href='#' className={`${styles.intro__button} ${styles["intro__button--ghost"]}`}>
                Advertise on Bubble
              </a>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src='/intro_image.png'
              alt='Intro image'
              width={619}
              height={613}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
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
