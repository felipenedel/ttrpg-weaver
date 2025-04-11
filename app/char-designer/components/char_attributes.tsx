"use client";

import {Blockquote, HStack, Mark, RadioGroup, Text, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import AttributeAssigner from "@/app/char-designer/components/attributes/attribute_assigner";
import AttributeRoller from "@/app/char-designer/components/attributes/attribute_roller";

export default function CharAttributes() {
  const [assignType, setAssignType] = useState<string>("");
  const assignOptions = [
    {label: "Roll 3d6", value: "roll"},
    {label: "Assign attributes", value: "assign"}
  ]

  return (
    <VStack align="start" gap={4}>
      <Blockquote.Root>
        <Blockquote.Content>
          You may either roll <Mark variant={"text"}>3d6 and set one to 14</Mark>, or assign from a predefined array
        </Blockquote.Content>
      </Blockquote.Root>
      <Text>Assign type</Text>
      <RadioGroup.Root value={assignType} onValueChange={(e) => setAssignType(e.value || "")}>
        <HStack gap="6">
          {assignOptions.map((item) => (
            <RadioGroup.Item key={item.value} value={item.value}>
              <RadioGroup.ItemHiddenInput/>
              <RadioGroup.ItemIndicator/>
              <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </HStack>
      </RadioGroup.Root>
      {
        assignType === "roll" && (
          <AttributeRoller/>
        )
      }
      {
        assignType === "assign" && (
          <AttributeAssigner/>
        )
      }
    </VStack>
  )
}
