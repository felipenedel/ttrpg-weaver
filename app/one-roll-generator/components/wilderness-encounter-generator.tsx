"use client"

import {Box, Button, DataList, StackSeparator, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {WildernessEncounter} from "@/types/one-roll/wilderness_encounter_type";

export default function WildernessEncounterGenerator() {
  const [resultData, setResultData] = useState<WildernessEncounter | null>(null);

  const generate = (type: string) => {
    try {
      fetch(`/api/one-roll-generator?type=${type}`)
        .then((res) => res.json() as Promise<WildernessEncounter>)
        .then((data) => {
          setResultData(data);
        });
    } catch (err) {
      console.error("Error fetching API:", err);
    }
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <VStack separator={<StackSeparator/>}>
        <Button onClick={() => generate("wilderness_encounter")}>Generate Wilderness Encounter</Button>
        {
          resultData && (
            <DataList.Root orientation="horizontal" divideY="1px" maxW="4xl">
              {[
                {label: "Range", value: resultData.range},
                {label: "Weather and lighting", value: resultData.weatherAndLighting},
                {label: "Encounter nature", value: resultData.encounterNature},
                {label: "Friendly creatures", value: resultData.friendlyCreatures},
                {label: "Hostile creatures", value: resultData.hostileCreatures},
                {label: "Relevant features nearby", value: resultData.relevantFeaturesNearby}
              ].map(({label, value}) => (
                <DataList.Item pt="4" key={label}>
                  <DataList.ItemLabel w="40" flexShrink="0">
                    {label}
                  </DataList.ItemLabel>
                  <DataList.ItemValue>{value}</DataList.ItemValue>
                </DataList.Item>
              ))}
            </DataList.Root>
          )
        }
      </VStack>
    </Box>
  )
}
