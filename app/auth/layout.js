import "../globals.css";

export const metadata = {
  title: "Auth",
  description: "Authenticate to shopfinity",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
