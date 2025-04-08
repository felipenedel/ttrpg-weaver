"use client"

import {Box, Button, StackSeparator, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {NameGeneratorRepository, NameGeneratorType} from "@repositories/nameGeneratorRepository";
import NameDataList from "./name-data-list";
import LanguageSelector from "./language-selector";

export default function Page() {
  const [resultData, setResultData] = useState<NameGeneratorType | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const generateName = () => {
    NameGeneratorRepository.perform(selectedLanguage).then((result) => {
      setResultData(result);
    });
  }

  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <VStack separator={<StackSeparator/>}>
        <LanguageSelector setLanguage={setSelectedLanguage}></LanguageSelector>
        <Button onClick={generateName}>Generate New Name</Button>
        <NameDataList nameData={resultData}/>
      </VStack>
    </Box>
  )
}
