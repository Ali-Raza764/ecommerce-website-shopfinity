export const metadata = {
  title: "Authentication",
  description: "Authenticdate yourself to use Pendrive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
