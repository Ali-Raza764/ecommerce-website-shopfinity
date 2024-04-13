import "../globals.css";

export const metadata = {
  title: "Admin",
  description: "Admin  Dashboard and cms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
