import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./navigation"

//Layout fonts
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Layout Metadata
export const metadata: Metadata = {
  title: "Liam Berry | Mechatronics and Biomedical Engineering",
  description: "Mechatronics and Biomedical Engineering Pre-med Student. Passionate About Accessible Care, Education, and the Advancement of Research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <NavigationBar/>
        {children}
      </body>
    </html>
  );
}
