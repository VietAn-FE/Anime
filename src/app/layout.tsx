import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/assets/fonts/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang làm về anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={`${roboto.className}  antialiased dark-mode`}>
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
