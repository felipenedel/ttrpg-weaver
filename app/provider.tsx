"use client"

import React, {useEffect, useState} from "react";
import {Box, ChakraProvider, defaultSystem, Flex} from "@chakra-ui/react"
import {ThemeProvider} from "next-themes";
import {Sidebar} from "@/app/sidebar";
import {NextIntlClientProvider} from "next-intl";

export default function RootLayout(props: { children: React.ReactNode }) {
  const [locale, setLocale] = useState('en-US');
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const stored = localStorage.getItem('locale') || 'en-US';
      setLocale(stored);
      const msgs = await import(`../locales/${stored}.json`);
      setMessages(msgs.default);
    };
    loadMessages();
  }, []);

  if (!messages) return null; // or a loading spinner

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Flex direction="column" minH="100vh">
            <Flex flex="1">
              <Sidebar/>
              <Box as="main" flex="1" p={6}>
                {props.children}
              </Box>
            </Flex>
          </Flex>
        </NextIntlClientProvider>
      </ThemeProvider>
    </ChakraProvider>
  )
}
