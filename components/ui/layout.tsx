'use client';

import {Box, Flex} from '@chakra-ui/react';
import React from "react";
import {Header} from "@components/ui/header";
import {Sidebar} from "@components/ui/sidebar";

export const Layout = ({children}: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header/>
      <Flex flex="1">
        <Sidebar/>
        <Box as="main" flex="1" p={6}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
