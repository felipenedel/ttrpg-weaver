"use client";

import {Button, Text, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {NameGeneratorRepository, NameGeneratorType} from "@api/database/repositories/nameGeneratorRepository";

const NameGenerator = () => {
  const [name, setName] = useState<NameGeneratorType | null>(null);

  const reload = () => {
    NameGeneratorRepository.getRandomName().then((result) => {
      setName(result);
    });
  }

  return (
    <VStack>
      <Button onClick={reload}>Generate New Name</Button>
      <Text fontSize="xl">
        {name?.name || "Click the button to generate a name!"}
      </Text>
    </VStack>
  )
};

export default NameGenerator;
