'use client';

import {Button, Drawer, Link, Portal, VStack,} from '@chakra-ui/react';
import {CircleChevronLeft, CircleChevronRight} from 'lucide-react';

export const Sidebar = () => {
  const links = [
    {label: 'Home', href: '/'},
    {label: 'Dice roller', href: '/dice-roller'},
    {label: 'Changelog', href: '/changelog'},
  ];

  const NavLinks = () => (
    <VStack align="start" p={4}>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </VStack>
  );

  return (
    <Drawer.Root placement="start">
      <Drawer.Trigger asChild>
        <CircleChevronRight/>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop/>
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Routes</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <NavLinks/>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CircleChevronLeft/>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
