import {Box, Separator, Text} from "@chakra-ui/react"
import D6Roller from "./d6-roller";
import DiceRoller from "./dice-roller";

export default function Page() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Text>Roll d6</Text>
      <D6Roller/>
      <Separator/>
      <Text>Roll Any Dice</Text>
      <DiceRoller/>
    </Box>
  )
}
