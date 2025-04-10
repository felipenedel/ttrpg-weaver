"use client"

import {Box, For, Stack, Text} from "@chakra-ui/react"
import {useVersions} from "@/app/changelog/version_control";

export default function Page() {
  const versions = useVersions()

  return (
    <Stack>
      <For each={versions}>
        {(version, index) => (
          <Box borderWidth="1px" key={index} p="4">
            <Text textStyle="xl" fontWeight="bold">{version.versionNumber} - {version.title}</Text>
            <Text textStyle="lg" fontWeight="bold">{version.date}</Text>
            <For each={version.updates}>
              {(update, index) => (
                <Text key={index}>{update}</Text>
              )}
            </For>
          </Box>
        )}
      </For>
    </Stack>
  )
}
