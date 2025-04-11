import {SegmentGroup, Table, Text, VStack} from "@chakra-ui/react";
import React, {useState} from "react";

export default function AttributeAssigner() {
  const items = [
    {id: 1, name: "Strength", value: "0"},
    {id: 2, name: "Dexterity", value: "0"},
    {id: 3, name: "Constitution", value: "0"},
    {id: 4, name: "Intelligence", value: '0'},
    {id: 5, name: "Wisdom", value: "0"},
    {id: 6, name: "Charisma", value: "0"}
  ]

  const assignScoreOptions = [
    {label: "14", value: "14"},
    {label: "12", value: "12"},
    {label: "11", value: "11"},
    {label: "10", value: "10"},
    {label: "9", value: "9"},
    {label: "7", value: "7"}
  ]

  const setValue = (item, value) => {
    setBla((prev) => {
      // Find the item currently holding the value (if any)
      const holderIndex = prev.findIndex((i) => i.value === value);
      const targetIndex = prev.findIndex((i) => i.id === item.id);

      const updated = [...prev];

      if (holderIndex !== -1 && holderIndex !== targetIndex) {
        // Swap values
        updated[holderIndex] = {...updated[holderIndex], value: updated[targetIndex].value};
      }

      // Set the value on the target
      updated[targetIndex] = {...updated[targetIndex], value};

      return updated;
    });
  };

  const [bla, setBla] = useState(items);

  return (
    <VStack>
      <VStack>
        <Table.Root size="sm" variant={"line"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Attribute</Table.ColumnHeader>
              <Table.ColumnHeader>Assign</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {bla.map((item, index) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>
                  <SegmentGroup.Root value={bla[index].value} onValueChange={(e) => setValue(item, e.value)}>
                    <SegmentGroup.Indicator/>
                    {
                      assignScoreOptions.map((option) => (
                        <SegmentGroup.Item key={option.value} value={option.value}>
                          <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
                          <SegmentGroup.ItemHiddenInput/>
                        </SegmentGroup.Item>
                      ))
                    }
                  </SegmentGroup.Root>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </VStack>
    </VStack>
  )

}
