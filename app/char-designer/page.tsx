"use client";

import {Card, Collapsible, Heading, HStack, IconButton, Input, RadioGroup, Stack, Text, VStack} from "@chakra-ui/react";
import {Shuffle} from "lucide-react";
import {GeneratedName} from "@/types/name-generator/generated_name_type";
import {useState} from "react";
import AttributeRoller from "@/app/char-designer/components/attribute_roller";

export default function Page() {
  const [name, setName] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [assignType, setAssignType] = useState<string>("");
  const genderOptions = [
    {label: "Male", value: "m"},
    {label: "Female", value: "f"},
    {label: "Undefined or irrelevant", value: "-"},
  ]
  const assignOptions = [
    {label: "Roll 3d6", value: "roll"},
    {label: "Assign", value: "assign"}
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
    <Stack>
      <Heading size="4xl">Char Designer</Heading>
      <Collapsible.Root>
        <Collapsible.Trigger paddingY="3">Toggle Collapsible</Collapsible.Trigger>
        <Collapsible.Content>
          <Card.Root size="sm">
            <Card.Header>
              <Heading size="md">Char Details</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
              <VStack align="start" gap={4}>
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
                <Text>Roll 3d6 and set one to 14 or assign based on a predefined array</Text>
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
                  assignType === "assign" && (
                    <HStack w="full">
                      <Text {...labelStyles}>Roll</Text>
                      <Input value={name} onChange={(e) => setName(e.target.value)}/>
                    </HStack>
                  )
                }
                {
                  assignType === "roll" && (
                    <AttributeRoller/>
                  )
                }
              </VStack>
            </Card.Body>
          </Card.Root>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  )
}
