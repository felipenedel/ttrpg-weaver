"use client"

import React from "react";
import {Box, StackSeparator, VStack} from "@chakra-ui/react";
import NpcGenerator from "@/app/one-roll-generator/components/npc-generator";
import PatronGenerator from "@/app/one-roll-generator/components/patron-generator";
import UrbanEncounterGenerator from "@/app/one-roll-generator/components/urban-encounter-generator";
import WildernessEncounterGenerator from "@/app/one-roll-generator/components/wilderness-encounter-generator";

export default function Page() {
  return (
    <Box textAlign="center" fontSize="xl">
      <VStack gap={8} separator={<StackSeparator/>}>
        <NpcGenerator/>
        <PatronGenerator/>
        <UrbanEncounterGenerator/>
        <WildernessEncounterGenerator/>
      </VStack>
    </Box>
  )
}
