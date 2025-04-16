"use client"

import React from "react";
import {Box, ChakraProvider, Flex} from "@chakra-ui/react";
import {ThemeProvider} from "next-themes";
import {Sidebar} from "@/app/sidebar";
import {system} from "./theme";

export default function RootLayout(props: { children: React.ReactNode }) {
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
              position="relative"
              overflow="hidden"
              boxShadow="0 0 20px rgba(0, 255, 224, 0.8)"
              borderRadius="xl"
              borderWidth="1px"
              borderColor={"rgba(0, 255, 224, 0.5)"}
            >
              {props.children}
            </Box>
          </Flex>
        </Flex>
      </ThemeProvider>
    </ChakraProvider>
  );
}
