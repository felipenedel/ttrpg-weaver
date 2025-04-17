import {Dice} from "@/types/name-generator/dice_type";

export const rollDefaultDice = (): Dice[] => {
  const diceTypes = [4, 6, 8, 10, 12, 20];

  return diceTypes.map((diceType) => {
    const roll = Math.floor(Math.random() * diceType) + 1;

    return {type: `d${diceType}`, roll: roll} as Dice;
  });
}
