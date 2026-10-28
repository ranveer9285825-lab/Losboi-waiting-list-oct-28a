import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "./AppShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Losboi - Your Next Favourite Read & Chat Space",
      description: "Aap losboi ki aadhikarika website par hain. Yahan padhein behtareen novels.",
        icons: {
            icon: "https://i.ibb.co/4g2H8bkF/logo.png", // Yahan seedha wahi URL aa jayega
              },
              };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
