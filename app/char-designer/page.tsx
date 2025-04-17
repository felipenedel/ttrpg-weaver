"use client";

import {Card, Heading, Separator, Stack, VStack} from "@chakra-ui/react";
import React from "react";
import HpRoller from "@/app/char-designer/components/hp_roller";
import CharDetails from "@/app/char-designer/components/char_details";
import CharAttributes from "@/app/char-designer/components/char_attributes";

export default function Page() {
  return (
    <Stack>
      <Heading size="4xl">Char Designer</Heading>
      <Separator size="lg"/>
      <Card.Root size="sm">
        <Card.Header>
          <Heading size="xl">Char Details</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <VStack align="start" gap={4}>
            <CharDetails/>
          </VStack>
        </Card.Body>
      </Card.Root>
      <Card.Root size="sm">
        <Card.Header>
          <Heading size="xl">Attributes</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <VStack align="start" gap={4}>
            <CharAttributes/>
          </VStack>
        </Card.Body>
      </Card.Root>
      <Card.Root size="sm">
        <Card.Header>
          <Heading size="xl">HP</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          <VStack align="start" gap={4}>
            <HpRoller/>
          </VStack>
        </Card.Body>
      </Card.Root>
    </Stack>
  )
}
