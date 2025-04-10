import {Space_Grotesk} from "next/font/google"
import Provider from "./provider"
import React from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

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
    <html className={spaceGrotesk.variable} suppressHydrationWarning>
    <head><title></title></head>
    <body>
    <Provider>{children}</Provider>
    </body>
    </html>
  )
}
