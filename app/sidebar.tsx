"use client";

import {Box, Button, ClientOnly, Drawer, HStack, Link, Portal, Separator, Skeleton, VStack,} from "@chakra-ui/react";
import {ChevronRightIcon} from "lucide-react";
import {ColorModeToggle} from "@/app/color-mode-toggle";

export const Sidebar = () => {
  const links = [
    {label: "Home", href: "/"},
    {label: "Character designer", href: "/char-designer"},
    {label: "One roll helper", href: "/one-roll-generator"},
    {label: "Changelog", href: "/changelog"}
  ];

  const sandboxLinks = [
    {label: "Dice roller", href: "/dice-roller"},
    {label: "Name generator", href: "/name-generator"}
  ];

  const NavLinks = () => (
    <VStack align="start" p={4} w="100%">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
      <Separator w="100%"/>
      {sandboxLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </VStack>
  );

  return (
    <Drawer.Root placement="start" trapFocus={false}>
      <Drawer.Trigger asChild>
        <Box
          position="fixed"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          height="120px"
          width="24px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRightRadius="md"
          borderLeftRadius="none"
          boxShadow="md"
          cursor="pointer"
          bg="black"
          _hover={{bg: "gray.800"}}
          _dark={{bg: "gray.700", _hover: {bg: "gray.600"}}}
          zIndex={2}
        >
          <ChevronRightIcon color={"white"} size={16}/>
        </Box>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop/>
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>TTRPG Weaver</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <NavLinks/>
            </Drawer.Body>
            <Drawer.Footer>
              <HStack justify="flex-start" align="center" w="100%">
                <Button size="sm" h="10" variant="solid">
                  Login
                </Button>
                <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md"/>}>
                  <ColorModeToggle/>
                </ClientOnly>
              </HStack>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
