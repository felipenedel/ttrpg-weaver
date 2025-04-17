import {NextRequest, NextResponse} from "next/server";
import path from "path";
import fs from "fs";
import {toCamelCaseDeep} from "@/services/pascalCase";
import {randomLanguage} from "@/types/name-generator/language_options";
import {SafeParams} from "@/services/safeParams";
import {NameGeneratorLanguage} from "@/types/name-generator/seed_data_type";
import {GeneratedName} from "@/types/name-generator/generated_name_type";
import {capitalize} from "lodash";

function loadNameData(language: string): NameGeneratorLanguage {
  const filePath = path.join(process.cwd(), "data", "names.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  const languageData = toCamelCaseDeep(JSON.parse(rawData));

  return languageData[language] as NameGeneratorLanguage;
}

export function generateData(languageParam: string | null): GeneratedName {
  const language = languageParam || randomLanguage()
  const data = loadNameData(language);

  if (!data) throw new Error("Data not found for given language");

  const nameRoll = Math.floor(Math.random() * 100) + 1;
  const placeRoll = Math.floor(Math.random() * 100) + 1;

  const nameEntry = data.names.find((entry) => nameRoll >= entry.rollMin && nameRoll <= entry.rollMax);
  const placeEntry = data.places.find((entry) => placeRoll >= entry.rollMin && placeRoll <= entry.rollMax);

  if (!nameEntry || !placeEntry) {
    throw new Error("Failed to find matching entries");
  }

  return {...nameEntry, ...placeEntry, language: capitalize(language)}
}

export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url);
  const languageParam = new SafeParams(searchParams).get("language");

  const data = generateData(languageParam);

  return NextResponse.json(data);
}
