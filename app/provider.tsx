"use client"

import React from "react";
import {ChakraProvider, defaultSystem} from "@chakra-ui/react"
import {Layout} from "@components/ui/layout";
import {ThemeProvider} from "next-themes";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Layout>
          {props.children}
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  )
}
