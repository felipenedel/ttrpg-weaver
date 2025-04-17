"use client"

import {Box, Button, DataList, StackSeparator, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {UrbanEncounter} from "@/types/one-roll/urban_encounter_type";

export default function UrbanEncounterGenerator() {
  const [resultData, setResultData] = useState<UrbanEncounter | null>(null);

  const generate = (type: string) => {
    try {
      fetch(`/api/one-roll-generator?type=${type}`)
        .then((res) => res.json() as Promise<UrbanEncounter>)
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
        <Button onClick={() => generate("urban_encounter")}>Generate Urban Encounter</Button>
        {
          resultData && (
            <DataList.Root orientation="horizontal" divideY="1px" maxW="xl">
              {[
                {label: "Conflict", value: resultData.conflict},
                {label: "Venue", value: resultData.venue},
                {label: "Why is PC involved", value: resultData.whyPcInvolved},
                {label: "Event nature", value: resultData.eventNature},
                {label: "Antagonists", value: resultData.antagonists},
                {label: "Relevant features", value: resultData.relevantFeatures}
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
