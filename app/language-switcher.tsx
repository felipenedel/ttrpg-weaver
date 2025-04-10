'use client';

import {createListCollection, Portal, Select} from '@chakra-ui/react';
import React, {startTransition, useEffect} from "react";
import {useRouter} from 'next/navigation';
import {setUserLocale} from "@/services/i18n/locale";
import {Locale} from "@/services/i18n/config";

const LanguageSwitcher = () => {
  const router = useRouter();

  const options = createListCollection({
    "items": [
      {"label": "English", "value": "en-US"},
      {"label": "Português", "value": "pt-BR"}
    ]
  })

  useEffect(() => {
    const stored = getCookie('locale') || 'en-US';
    const locale = stored as Locale;
    console.log("sdlfusdifsdifbsdifsdifv")
    setUserLocale(locale);
  }, []);

  const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match?.[2];
  };

  const setCookie = (name: string, value: string) => {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`; // 1 year
  };

  const handleChange = (value: string) => {

    const locale = value as Locale;
    console.log("plz help", locale)
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <Select.Root
      collection={options}
      size="sm"
      width="320px"
      onChange={(e) => handleChange((e.target as HTMLSelectElement).value)}
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
            {options.items.map((language) => (
              <Select.Item item={language} key={language.value}>
                {language.label}
                <Select.ItemIndicator/>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default LanguageSwitcher;
