"use client";

import {Button, createListCollection, HStack, Input, Portal, Select, Text, VStack} from "@chakra-ui/react";
import {Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices} from "lucide-react";
import React, {useState} from "react";
import {TextInput} from "@components/ui/text-input";

const DiceRoller = () => {
  const diceComponents = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const diceTypes = createListCollection({
    items: [
      {label: "d2", value: "2"},
      {label: "d4", value: "4"},
      {label: "d6", value: "6"},
      {label: "d8", value: "8"},
      {label: "d10", value: "10"},
      {label: "d12", value: "12"},
      {label: "d20", value: "20"},
      {label: "d100", value: "100"}
    ],
  })

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
      <Select.Root collection={diceTypes} size="sm" width="120px">
        <Select.HiddenSelect/>
        <Select.Label>Select dice type</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select dice type"/>
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator/>
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {diceTypes.items.map((diceType) => (
                <Select.Item item={diceType} key={diceType.value}>
                  {diceType.label}
                  <Select.ItemIndicator/>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <TextInput
        fieldName="Number of dice"
        width="200px"
        placeholder="Number of dice"
        value={diceQuantity}
        maxLength={1}
        onChange={(e) => setDiceQuantity(e.currentTarget.value)}
      >
      </TextInput>
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

export default DiceRoller;
