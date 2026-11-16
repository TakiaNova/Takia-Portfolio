import "./globals.css";

export const metadata = {
  title: "Takia Sultana Nova | Junior Frontend Developer",
  description:
    "Portfolio of Takia Sultana Nova, Junior Frontend Developer specializing in React.js and Next.js."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
