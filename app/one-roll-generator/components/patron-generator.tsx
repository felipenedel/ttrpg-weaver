"use client"

import {Box, Button, DataList, StackSeparator, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {Patron} from "@/types/one-roll/patron_type";

export default function PatronGenerator() {
  const [resultData, setResultData] = useState<Patron | null>(null);

  const generate = (type: string) => {
    try {
      fetch(`/api/one-roll-generator?type=${type}`)
        .then((res) => res.json() as Promise<Patron>)
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
        <Button onClick={() => generate("patron")}>Generate Patron</Button>
        {
          resultData && (
            <DataList.Root orientation="horizontal" divideY="1px" maxW="xl">
              {[
                {label: "Eagerness to hire", value: resultData.eagernessToHire},
                {label: "Trustworthiness", value: resultData.trustworthiness},
                {label: "Challenge", value: resultData.challenge},
                {label: "Countervailing force", value: resultData.countervailingForce},
                {label: "Potential rewards", value: resultData.potentialRewards},
                {label: "Complications", value: resultData.complications},
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
