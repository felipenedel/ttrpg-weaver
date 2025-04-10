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
        <Flex direction="column" minH="100vh">
          <Flex flex="1">
            <Sidebar/>
            <Box
              as="main"
              flex="1"
              maxW="6xl"
              padding={8}
              mx="auto"
              bg="gray.300"
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
