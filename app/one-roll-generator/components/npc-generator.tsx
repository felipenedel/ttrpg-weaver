"use client"

import {Box, Button, DataList, StackSeparator, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {Npc} from "@/types/one-roll/npc_type";

export default function NpcGenerator() {
  const [resultData, setResultData] = useState<Npc | null>(null);

  const generate = (type: string) => {
    try {
      fetch(`/api/one-roll-generator?type=${type}`)
        .then((res) => res.json() as Promise<Npc>)
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
        <Button onClick={() => generate("npc")}>Generate NPC</Button>
        {
          resultData && (
            <DataList.Root orientation="horizontal" divideY="1px" maxW="xl">
              {[
                {label: "Age", value: resultData.age},
                {label: "Background", value: resultData.background},
                {label: "Role", value: resultData.role},
                {label: "Biggest problem", value: resultData.biggestProblem},
                {label: "Greatest desire", value: resultData.greatestDesire},
                {label: "Main trait", value: resultData.mainTrait}
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
