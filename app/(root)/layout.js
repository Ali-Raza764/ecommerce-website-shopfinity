import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export const metadata = {
  title: "Shopfinity",
  description: "Shopfinity is an ecommerce store for online shopping",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header>{children}</Header>
      <Footer />
    </>
  );
}
