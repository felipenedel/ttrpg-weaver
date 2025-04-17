"use client"

import {Box, Button, DataList, StackSeparator, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {buttonTextMappings, labelMappings} from "@/app/one-roll-generator/components/label-mappings";

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
