import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { experimental__simple } from "@clerk/themes";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopfinity",
  description: "Shopfinity is an ecommerce store for online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: experimental__simple,
        }}
      >
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
