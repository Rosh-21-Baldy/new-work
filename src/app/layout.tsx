import "@/styles/globals.css";
import { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home Loan - Best Rates & Offers from 35+ Lenders | Ambak Home Loans",
  description:
    "Compare home loans, balance transfers, or loans against property from 35+ banks with Ambak. Instantly calculate EMI and apply online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
