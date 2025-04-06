import {Box,} from "@chakra-ui/react"
import DiceRoller from "@components/dice-roller/dice-roller";

export default function Page() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <DiceRoller/>
    </Box>
  )
}
