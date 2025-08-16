import "./globals.css";
import "./app.css";

// to wake server
fetch('https://random-165h.onrender.com/')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
     >
      <body className="main_wrapper">
        {children}
      </body>
    </html>
  );
}
