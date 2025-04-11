import {Button, HStack, IconButton, Table, VStack} from "@chakra-ui/react";
import {CopyX, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Shuffle} from "lucide-react";
import React, {useState} from "react";

export default function AttributeRoller() {
  const items = [
    {id: 1, name: "Strength", rolls: [], modifier: 0, fixed: false},
    {id: 2, name: "Dexterity", rolls: [], modifier: 0, fixed: false},
    {id: 3, name: "Constitution", rolls: [], modifier: 0, fixed: false},
    {id: 4, name: "Intelligence", rolls: [], modifier: 0, fixed: false},
    {id: 5, name: "Wisdom", rolls: [], modifier: 0, fixed: false},
    {id: 6, name: "Charisma", rolls: [], modifier: 0, fixed: false}
  ]

  const [rolledItems, setRolledItems] = useState<Item[]>(items);

  const calculateModifier = (roll: number): number => {
    if (!roll) return 0;
    if (roll <= 3) return -2;
    if (roll <= 7) return -1;
    if (roll <= 13) return 0;
    if (roll <= 17) return 1;
    return 2;
  }

  type Item = {
    id: number;
    name: string;
    rolls: number[];
    modifier: number;
    fixed: boolean;
  };

  const rollAttributes = () => {
    const rolledItems = items.map((item) => {
      const roll1 = Math.floor(Math.random() * 6 + 1)
      const roll2 = Math.floor(Math.random() * 6 + 1)
      const roll3 = Math.floor(Math.random() * 6 + 1)

      return {...item, rolls: [roll1, roll2, roll3]};
    });

    setRolledItems(rolledItems);
  }

  const sumRolls = (item) => {
    const sum = item.rolls?.reduce((total: number, roll) => {
      return total + roll;
    }, 0);

    return sum;
  }

  const fixItemTo14 = (itemId: number) => {
    const updatedItems = rolledItems.map((item) => {
      return {...item, fixed: item.id === itemId}
    });

    setRolledItems(updatedItems);
  }

  const diceComponents = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  return (
    <VStack>
      <Table.Root size="sm" variant={"line"}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Attribute</Table.ColumnHeader>
            <Table.ColumnHeader>Sum</Table.ColumnHeader>
            <Table.ColumnHeader>Modifier</Table.ColumnHeader>
            <Table.ColumnHeader>Set to 14</Table.ColumnHeader>
            <Table.ColumnHeader>Rolls</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rolledItems.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{(item.fixed ? "14 (" + sumRolls(item) + ")" : sumRolls(item)) || "-"}</Table.Cell>
              <Table.Cell>{(item.fixed ? `${calculateModifier(14)} (${calculateModifier(sumRolls(item))})` : sumRolls(item) ? calculateModifier(sumRolls(item)) : "-")}</Table.Cell>
              <Table.Cell>
                <IconButton disabled={rolledItems.some((item) => item.rolls.length === 0)} onClick={() => fixItemTo14(item.id)} size="sm" variant="ghost">
                  <CopyX/>
                </IconButton>
              </Table.Cell>
              <Table.Cell>
                {
                  <HStack>
                    {item.rolls?.map((id, index) => {
                      const DiceComponent = diceComponents[id - 1];
                      return <DiceComponent key={index}/>;
                    })}
                  </HStack>
                }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Button onClick={rollAttributes} alignSelf="flex-start" size="sm" variant="solid">
        Roll <Shuffle/>
      </Button>
    </VStack>
  )
}
