import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohammed Aadil — Software Engineer",
  description:
    "Computer Science undergraduate with hands-on experience in software and backend development, API design, Java, Python, and building scalable applications.",
  keywords: [
    "Mohammed Aadil",
    "Software Engineer",
    "Backend Developer",
    "Java",
    "Python",
    "API Design",
    "Computer Science",
    "Resume",
  ],
  authors: [{ name: "Mohammed Aadil" }],
  openGraph: {
    title: "Mohammed Aadil — Software Engineer",
    description:
      "Computer Science undergraduate with hands-on experience in software and backend development, API design, and building scalable applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
