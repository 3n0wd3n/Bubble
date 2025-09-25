import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-figtree", // proměnná pro CSS
});

export const metadata = {
  title: "Bubble",
  description: "Social Network App",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${figtree.variable}`}>{children}</body>
    </html>
  );
}
