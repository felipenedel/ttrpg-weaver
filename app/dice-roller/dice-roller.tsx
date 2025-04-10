"use client";

import {Button, createListCollection, DataList, ListCollection, Portal, Select, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {Dices} from "lucide-react";
import {sortBy} from "lodash";

const D6Roller = () => {
  type DiceType = {
    label: string;
    value: number;
    score?: number;
  }

  const diceOptions: ListCollection<DiceType> = createListCollection({
    items: [
      {label: "d4", value: 4},
      {label: "d6", value: 6},
      {label: "d8", value: 8},
      {label: "d10", value: 10},
      {label: "d12", value: 12},
      {label: "d20", value: 20},
      {label: "d100", value: 100}
    ],
  })

  const [selectedDiceTypes, setSelectedDiceTypes] = useState<DiceType[]>([]);
  const [rolledDice, setRolledDice] = useState<DiceType[]>([]);

  const rollDice = () => {
    const rolls: DiceType[] = []

    const sortedDiceTypes = sortBy(selectedDiceTypes, "value");
    for (const diceType of sortedDiceTypes) {
      const roll = Math.floor((Math.random() * diceType.value) + 1)

      rolls.push({label: `d${diceType.value}`, value: roll, score: Number((roll / diceType.value).toFixed(2))});
    }

    setRolledDice(rolls)
  }

  return (
    <VStack>
      <Select.Root
        multiple
        collection={diceOptions}
        size="sm"
        width="200px"
        onValueChange={(details) => {
          setSelectedDiceTypes(details.items);
        }}>
        <Select.HiddenSelect/>
        <Select.Label>Select dice type</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select dice type"/>
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.ClearTrigger/>
            <Select.Indicator/>
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {diceOptions.items.map((diceOption) => (
                <Select.Item item={diceOption} key={diceOption.value}>
                  {diceOption.label}
                  <Select.ItemIndicator/>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Button width="200px" onClick={() => rollDice()}>
        <Dices/> Roll
      </Button>
      <DataList.Root orientation="horizontal" divideY="1px" maxW="md">
        {rolledDice.map((dice) => {
          return (
            <DataList.Item key={dice.label}>
              <DataList.ItemLabel>{dice.label}</DataList.ItemLabel>
              <DataList.ItemValue>{dice.value} / {dice.score}</DataList.ItemValue>
            </DataList.Item>
          )
        })}
      </DataList.Root>
    </VStack>
  )
};

export default D6Roller;
