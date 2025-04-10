"use client";

import {Box, Text} from "@chakra-ui/react";
import LanguageSwitcher from "@/app/language-switcher";
import {useTranslations} from "use-intl";

export default function Page() {
  const t = useTranslations("Page");
  return (
    <Box textAlign="center" fontSize="xl">
      <Text>{t("language")}</Text>
      <LanguageSwitcher/>
    </Box>
  )
}
