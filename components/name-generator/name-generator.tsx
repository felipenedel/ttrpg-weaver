"use client";

import {Button, DataList, Text, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {NameGeneratorRepository, NameGeneratorType} from "@api/database/repositories/nameGeneratorRepository";

const NameGenerator = () => {
  const [resultData, setResultData] = useState<NameGeneratorType | null>(null);

  const reload = () => {
    NameGeneratorRepository.getRandomName(null).then((result) => {
      setResultData(result);
    });
  }

  return (
    <VStack>
      <Button onClick={reload}>Generate New Name</Button>
      {
        resultData ?
          (
            <DataList.Root orientation="horizontal" divideY="1px" maxW="md">
              <DataList.Item key="language">
                <DataList.ItemLabel>Cultura</DataList.ItemLabel>
                <DataList.ItemValue>{resultData.language}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item key="name_male">
                <DataList.ItemLabel>Nome (M)</DataList.ItemLabel>
                <DataList.ItemValue>{resultData.nameMale}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item key="name_female">
                <DataList.ItemLabel>Nome (F)</DataList.ItemLabel>
                <DataList.ItemValue>{resultData.nameFemale}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item key="surname">
                <DataList.ItemLabel>Sobrenome</DataList.ItemLabel>
                <DataList.ItemValue>{resultData.surname}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item key="place_name">
                <DataList.ItemLabel>Local</DataList.ItemLabel>
                <DataList.ItemValue>{resultData.placeName}</DataList.ItemValue>
              </DataList.Item>
            </DataList.Root>
          ) : (<Text fontSize="xl">
            Click the button to generate a name!
          </Text>)
      }
    </VStack>
  )
}

export default NameGenerator;
