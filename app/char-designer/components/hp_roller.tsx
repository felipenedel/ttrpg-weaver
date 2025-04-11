import {Button, HStack, Text, VStack} from "@chakra-ui/react";
import {Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Shuffle} from "lucide-react";
import React, {useState} from "react";

export default function HpRoller() {
  const [rolledHp, setRolledHp] = useState<number>();

  const rollHp = () => {
    setRolledHp(Math.floor(Math.random() * 6 + 1));
  }

  const diceComponents = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  return (
    <VStack>
      <HStack>
        <Text>Hit points: {rolledHp}</Text>
        {rolledHp && (() => {
          const DiceComponent = diceComponents[rolledHp - 1];
          return <DiceComponent key={rolledHp}/>;
        })()}
        <Text>+1 from CON = {(rolledHp || 0) + 1} (WIP)</Text>
      </HStack>
      <Button onClick={rollHp} alignSelf="flex-start" size="sm" variant="solid">
        Roll <Shuffle/>
      </Button>
    </VStack>
  )
}
