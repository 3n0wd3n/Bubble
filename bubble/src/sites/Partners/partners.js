"use client";
import { useEffect, useState } from "react";
import styles from "../../app/page.module.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

export default function PartnersPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) return null;
  return (
    <div className={styles.page}>
      <Header scrolled={scrolled} setScrolled={setScrolled} isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={styles.main}>
        <h1>Our Partners</h1>
        <p>We collaborate with amazing companies around the world.</p>
      </main>
      <Footer />
    </div>
  );
}
