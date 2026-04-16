import type { Metadata } from "next";
import { Alegreya, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio – xycxz",
  description: "Personal portfolio of Mateo Turina. DevSecOps engineer and software developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html
      lang="en"
      className={`${alegreya.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}</body>
    </html>
  );
}
