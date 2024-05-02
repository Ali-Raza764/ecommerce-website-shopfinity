import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopfinity",
  description: "Shopfinity is an ecommerce store for online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>{children}</Header>
        <Footer />
      </body>
    </html>
  );
}
