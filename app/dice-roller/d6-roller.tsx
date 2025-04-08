"use client";

import {Button, HStack, Input, Text, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices} from "lucide-react";

const D6Roller = () => {
  const diceComponents = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const rollDice = () => {
    const currentRolledDice = Array.from({length: parseInt(diceQuantity)}, () =>
      Math.floor(Math.random() * 6 + 1)
    );
    setRolledDice(currentRolledDice);
  };

  const [diceQuantity, setDiceQuantity] = useState("2");
  const [rolledDice, setRolledDice] = useState<number[]>([]);

  return (
    <VStack>
      <Input
        width="200px"
        placeholder="Number of dice"
        value={diceQuantity}
        maxLength={1}
        onChange={(e) => setDiceQuantity(e.currentTarget.value)}
      >
      </Input>
      <Button width="200px" onClick={() => rollDice()}>
        <Dices/> Roll {diceQuantity}D6
      </Button>
      <HStack>
        {rolledDice.map((id, index) => {
          const DiceComponent = diceComponents[id - 1];
          return <DiceComponent key={index}/>;
        })}
      </HStack>
      <Text fontSize="xl">
        {rolledDice.length > 0 && `Total: ${rolledDice.reduce((total, num) => total + num, 0)}`}
      </Text>
    </VStack>
  )
};

export default D6Roller;
