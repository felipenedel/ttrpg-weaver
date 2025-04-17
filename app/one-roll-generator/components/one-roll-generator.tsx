"use client"

import {Box, Button, DataList, StackSeparator, VStack} from "@chakra-ui/react";
import React, {useState} from "react";

const labelMappings = {
  npc: [
    {key: "age", label: "Age"},
    {key: "background", label: "Background"},
    {key: "role", label: "Role"},
    {key: "biggestProblem", label: "Biggest problem"},
    {key: "greatestDesire", label: "Greatest desire"},
    {key: "mainTrait", label: "Main trait"}
  ],
  patron: [
    {key: "eagernessToHire", label: "Eagerness to hire"},
    {key: "trustworthiness", label: "Trustworthiness"},
    {key: "challenge", label: "Challenge"},
    {key: "countervailingForce", label: "Countervailing force"},
    {key: "potentialRewards", label: "Potential rewards"},
    {key: "complications", label: "Complications"}
  ],
  urban_encounter: [
    {key: "conflict", label: "Conflict"},
    {key: "venue", label: "Venue"},
    {key: "whyPcInvolved", label: "Why is PC involved"},
    {key: "eventNature", label: "Event nature"},
    {key: "antagonists", label: "Antagonists"},
    {key: "relevantFeatures", label: "Relevant features"}
  ],
  wilderness_encounter: [
    {key: "range", label: "Range"},
    {key: "weatherAndLighting", label: "Weather and lighting"},
    {key: "encounterNature", label: "Encounter nature"},
    {key: "friendlyCreatures", label: "Friendly creatures"},
    {key: "hostileCreatures", label: "Hostile creatures"},
    {key: "relevantFeaturesNearby", label: "Relevant features nearby"}
  ]
};

const buttonTextMappings = {
  npc: "Generate NPC",
  patron: "Generate Patron",
  urban_encounter: "Generate Urban Encounter",
  wilderness_encounter: "Generate Wilderness Encounter"
};

interface OneRollGeneratorProps {
  type: "npc" | "patron" | "urban_encounter" | "wilderness_encounter";
}

export default function OneRollGenerator({type}: OneRollGeneratorProps) {
  const [resultData, setResultData] = useState<Record<string, string> | null>(null);

  const generate = () => {
    try {
      fetch(`/api/one-roll-generator?type=${type}`)
        .then((res) => res.json())
        .then((data) => {
          setResultData(data);
        });
    } catch (err) {
      console.error("Error fetching API:", err);
    }
  };

  const labels = labelMappings[type] || [];
  const buttonText = buttonTextMappings[type] || `Generate ${type}`;

  return (
    <Box textAlign="center" fontSize="xl">
      <VStack separator={<StackSeparator/>}>
        <Button onClick={() => generate()}>{buttonText}</Button>
        {resultData && (
          <DataList.Root orientation="horizontal" divideY="1px" maxW="xl">
            {labels.map(({key, label}) => (
              <DataList.Item pt="4" key={key}>
                <DataList.ItemLabel w="40" flexShrink="0">
                  {label}
                </DataList.ItemLabel>
                <DataList.ItemValue>{resultData[key]}</DataList.ItemValue>
              </DataList.Item>
            ))}
          </DataList.Root>
        )}
      </VStack>
    </Box>
  );
}
