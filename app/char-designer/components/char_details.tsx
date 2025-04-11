"use client";

import {HStack, IconButton, Input, RadioGroup, Text, VStack} from "@chakra-ui/react";
import {Shuffle} from "lucide-react";
import {GeneratedName} from "@/types/name-generator/generated_name_type";
import React, {useState} from "react";

export default function CharDetails() {
  const [name, setName] = useState<string>("");
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
          setName(data.nameMale);
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
        <IconButton onClick={randomizeName}>
          <Shuffle/>
        </IconButton>
      </HStack>
      <HStack w="full">
        <Text {...labelStyles}>Goal</Text>
        <Input value={goal} onChange={(e) => setGoal(e.target.value)}/>
      </HStack>
    </VStack>
  )
}
