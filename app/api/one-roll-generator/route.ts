import {NextRequest, NextResponse} from "next/server";
import path from "path";
import fs from "fs";
import {SafeParams} from "@/services/safeParams";
import {rollDefaultDice} from "@/services/diceRoller";
import {mapOneRollData} from "@/services/oneRollMapper";
import {toCamelCase} from "@/services/pascalCase";

function loadJsonData(type: string) {
  const filePath = path.join(process.cwd(), "data", `one_roll_${type}.json`);
  const rawData = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(rawData);
}

export function generateData(typeParam: string) {
  const data = loadJsonData(typeParam);

  if (!data) throw new Error("Data not found for given type");

  const rolls = rollDefaultDice()

  return rolls.reduce((acc, roll) => {
    const oneRollDataFunction = mapOneRollData(typeParam);
    const key = oneRollDataFunction(roll.type);

    console.log(`Rolling ${roll.type} for ${typeParam}: ${roll.roll}`);

    acc[toCamelCase(key)] = data[key][roll.roll];
    return acc;
  }, {});
}

export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url);
  const typeParam = new SafeParams(searchParams).get("type");

  if (!typeParam) throw new Error("Type parameter is required");

  const data = generateData(typeParam);

  return NextResponse.json(data);
}
