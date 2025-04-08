"use client";

import {Portal, Select} from "@chakra-ui/react";
import React from "react";
import {NameGeneratorLanguages} from "./name-generator-languages";

type Props = {
  setLanguage: (value: string) => void;
};

const LanguageSelector = ({setLanguage}: Props) => {
  return (
    <Select.Root
      collection={NameGeneratorLanguages}
      size="sm"
      width="320px"
      onChange={(e) => setLanguage((e.target as HTMLSelectElement).value)}
    >
      <Select.HiddenSelect/>
      <Select.Label>Select language</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select one"/>
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger/>
          <Select.Indicator/>
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {NameGeneratorLanguages.items.map((language) => (
              <Select.Item item={language} key={language.value}>
                {language.label}
                <Select.ItemIndicator/>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

export default LanguageSelector;
