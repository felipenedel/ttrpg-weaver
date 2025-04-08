"use client";

import {DataList} from "@chakra-ui/react";
import React from "react";
import {NameGeneratorType} from "@api/database/repositories/nameGeneratorRepository";

type Props = {
  nameData: NameGeneratorType | null
};

const NameDataList = ({nameData}: Props) => {
  return nameData && (
    <DataList.Root orientation="horizontal" divideY="1px" maxW="md">
      <DataList.Item key="language">
        <DataList.ItemLabel>Cultura</DataList.ItemLabel>
        <DataList.ItemValue>{nameData.language}</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item key="name_male">
        <DataList.ItemLabel>Nome (M)</DataList.ItemLabel>
        <DataList.ItemValue>{nameData.nameMale}</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item key="name_female">
        <DataList.ItemLabel>Nome (F)</DataList.ItemLabel>
        <DataList.ItemValue>{nameData.nameFemale}</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item key="surname">
        <DataList.ItemLabel>Sobrenome</DataList.ItemLabel>
        <DataList.ItemValue>{nameData.surname}</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item key="place_name">
        <DataList.ItemLabel>Local</DataList.ItemLabel>
        <DataList.ItemValue>{nameData.placeName}</DataList.ItemValue>
      </DataList.Item>
    </DataList.Root>
  )
}

export default NameDataList;
