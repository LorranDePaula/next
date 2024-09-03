import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flamengo",
  description: "Clube de Regatas do Flamengo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
