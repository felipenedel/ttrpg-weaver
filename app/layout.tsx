import {Inter} from "next/font/google"
import Provider from "./provider"
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "TTRPG Weaver",
  description: "Your TTRPG Companion",
  icons: {
    icon: [
      {
        url: "/dice.webp",
        type: "image/webp",
      },
    ],
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html className={inter.className} suppressHydrationWarning>
    <head><title>TTRPG Weaver</title></head>
    <body>
    <Provider>{children}</Provider>
    </body>
    </html>
  )
}
