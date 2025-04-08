import {Box, Text} from "@chakra-ui/react";
import NameGenerator from "@components/name-generator/name-generator";

export default function Page() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <Text>Welcome!</Text>
      <NameGenerator/>
    </Box>
  )
}
