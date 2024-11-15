import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "SUSHI POS",
  description: "A fake point of sale app to demo functions of a restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-screen min-h-screen bg-pinkFour" suppressHydrationWarning={true}>
        <Header/>
        <main className="flex justify-center items-center flex-grow overflow-hidden min-w-screen h-[87vh]">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
