"use client"

import {Box, Button, StackSeparator, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import LanguageSelector from "./components/language-selector";
import NameDataList from "./components/name-data-list";
import {GeneratedName} from "@/types/name-generator/generated_name_type";

export default function Page() {
  const [resultData, setResultData] = useState<GeneratedName | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateName = () => {
    setLoading(true);
    try {
      fetch(`/api/name-generator?language=${selectedLanguage}&roll=3`)
        .then((res) => res.json() as Promise<GeneratedName>)
        .then((data) => {
          console.log(data)
          setResultData(data);
        });
    } catch (err) {
      console.error("Error fetching API:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <VStack separator={<StackSeparator/>}>
        <LanguageSelector setLanguage={setSelectedLanguage}></LanguageSelector>
        <Button loading={loading} onClick={generateName}>Generate New Name</Button>
        <NameDataList nameData={resultData}/>
      </VStack>
    </Box>
  )
}
