import {Box, ClientOnly, Skeleton,} from "@chakra-ui/react"
import {ColorModeToggle} from "../components/color-mode-toggle"
import DiceRoller from "../components/dice-roller";

export default async function Page() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md"/>}>
          <ColorModeToggle/>
        </ClientOnly>
      </Box>

      {/*<Sidebar/>*/}
      <DiceRoller/>


    </Box>
  )
}
