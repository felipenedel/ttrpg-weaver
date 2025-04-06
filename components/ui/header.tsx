'use client';

import {Button, ClientOnly, Flex, HStack, Skeleton, Spacer, Text} from '@chakra-ui/react';
import {isLoggedIn, logout} from '@services/auth';
import {ColorModeToggle} from "@components/ui/color-mode-toggle";

export const Header = () => {
  const loggedIn = isLoggedIn();

  return (
    <Flex
      as="header"
      bg="gray.800"
      color="white"
      px={6}
      py={3}
      align="center"
      shadow="sm"
    >
      <Text fontWeight="bold">TTRPG Weaver</Text>
      <Spacer/>
      <HStack>
        {loggedIn ? (
          <Button size="sm" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button size="sm" variant="solid">
            Login
          </Button>
        )}
        <Spacer/>
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md"/>}>
          <ColorModeToggle/>
        </ClientOnly>
      </HStack>
    </Flex>
  );
};
