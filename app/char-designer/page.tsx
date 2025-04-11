"use client";

import {Card, Heading, Separator, Stack, VStack} from "@chakra-ui/react";
import {GeneratedName} from "@/types/name-generator/generated_name_type";
import React, {useState} from "react";
import HpRoller from "@/app/char-designer/components/hp_roller";
import CharDetails from "@/app/char-designer/components/char_details";
import CharAttributes from "@/app/char-designer/components/char_attributes";

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
