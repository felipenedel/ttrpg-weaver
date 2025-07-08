"use client";

import {HStack, IconButton, Input, Popover, Portal, RadioGroup, Text, VStack} from "@chakra-ui/react";
import {Shuffle} from "lucide-react";
import {GeneratedName} from "@/types/name-generator/generated_name_type";
import React, {useState} from "react";

export default function CharDetails() {
  const [name, setName] = useState<string>("");
  const [generatedName, setGeneratedName] = useState<GeneratedName | null>(null);
  const [openNameGenerator, setOpenNameGenerator] = useState(false)
  const [goal, setGoal] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const genderOptions = [
    {label: "Male", value: "m"},
    {label: "Female", value: "f"},
    {label: "Undefined or irrelevant", value: "-"},
  ]

  const randomizeName = () => {
    try {
      fetch(`/api/name-generator`)
        .then((res) => res.json() as Promise<GeneratedName>)
        .then((data) => {
          setGeneratedName(data);
        });
    } catch (err) {
      console.error("Error fetching API:", err);
    }
  };

  const labelStyles = {display: "inline-block", minW: "80px", flexShrink: 0};

  return (
    <VStack align="start" gap={4}>
      <HStack w="full">
        <Text {...labelStyles}>Gender</Text>
        <RadioGroup.Root value={gender} onValueChange={(e) => setGender(e.value || "")}>
          <HStack gap="6">
            {genderOptions.map((item) => (
              <RadioGroup.Item key={item.value} value={item.value}>
                <RadioGroup.ItemHiddenInput/>
                <RadioGroup.ItemIndicator/>
                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </HStack>
        </RadioGroup.Root>
      </HStack>
      <HStack w="full">
        <Text {...labelStyles}>Name</Text>
        <Input value={name} onChange={(e) => setName(e.target.value)}/>
        <Popover.Root open={openNameGenerator} onOpenChange={(e) => setOpenNameGenerator(e.open)}>
          <Popover.Trigger asChild>
            <IconButton onClick={randomizeName}>
              <Shuffle/>
            </IconButton>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Arrow/>
                <Popover.Body>
                  This is a popover with the same width as the trigger button
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </HStack>
      <HStack w="full">
        <Text {...labelStyles}>Goal</Text>
        <Input value={goal} onChange={(e) => setGoal(e.target.value)}/>
      </HStack>
    </VStack>
  )
}
