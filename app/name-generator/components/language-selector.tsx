"use client";

import {Portal, Select} from "@chakra-ui/react";
import React from "react";
import {LanguageOptions} from "@/types/name-generator/language_options"; // TODO api?

type Props = {
  setLanguage: (value: string) => void;
};

const LanguageSelector = ({setLanguage}: Props) => {
  return (
    <Select.Root
      collection={LanguageOptions}
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
            {LanguageOptions.items.map((language) => (
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
