"use client"

import React from "react";
import {Box, ChakraProvider, defaultSystem, Flex} from "@chakra-ui/react"
import {ThemeProvider} from "next-themes";
import {Sidebar} from "@/app/sidebar";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Flex direction="column" minH="100vh">
          <Flex flex="1">
            <Sidebar/>
            <Box as="main" flex="1" p={6}>
              {props.children}
            </Box>
          </Flex>
        </Flex>
      </ThemeProvider>
    </ChakraProvider>
  )
}
