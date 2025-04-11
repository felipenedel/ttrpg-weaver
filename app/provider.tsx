"use client"

import React from "react";
import {Box, ChakraProvider, createSystem, defaultConfig, Flex} from "@chakra-ui/react"
import {ThemeProvider} from "next-themes";
import {Sidebar} from "@/app/sidebar";

export default function RootLayout(props: { children: React.ReactNode }) {
  const system = createSystem(defaultConfig, {
    theme: {
      tokens: {
        fonts: {
          heading: {value: "var(--font-space-grotesk)"},
          body: {value: "var(--font-space-grotesk)"},
        },
      },
    },
  })

  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Flex
          bgSize="cover"
          bgRepeat="no-repeat"
          bgImage="url('/GrzegorzPedrycz_ROBOTILLO-1.webp')"
          direction="column"
          minH="100vh"
        >
          <Flex flex="1">
            <Sidebar/>
            <Box
              as="main"
              flex="1"
              maxW="6xl"
              padding={8}
              opacity={0.995}
              mx="auto"
              bg="gray.100"
              _dark={{bg: "gray.900"}}
            >
              {props.children}
            </Box>
          </Flex>
        </Flex>
      </ThemeProvider>
    </ChakraProvider>
  )
}
