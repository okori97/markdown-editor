import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Roboto, Roboto_Slab } from "next/font/google";
import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: "Markdown",
  description: "Generated by okori",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-roboto ${roboto.variable}`}>
        <main className="flex flex-row ">
          <Sidebar />
          <section className="w-full">
            <Navbar />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
