"use client"

import React from "react";
import {Box, StackSeparator, VStack} from "@chakra-ui/react";
import OneRollGenerator from "@/app/one-roll-generator/components/one-roll-generator";

export default function Page() {
  return (
    <Box textAlign="center" fontSize="xl">
      <VStack gap={8} separator={<StackSeparator/>}>
        <OneRollGenerator type="npc"/>
        <OneRollGenerator type="patron"/>
        <OneRollGenerator type="urban_encounter"/>
        <OneRollGenerator type="wilderness_encounter"/>
      </VStack>
    </Box>
  )
}
