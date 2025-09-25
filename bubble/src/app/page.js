import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* header */}
      <header>
        {/* navigation */}
        <nav></nav>
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
