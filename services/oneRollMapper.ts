const mapNpcData = (diceType: string) => {
  switch (diceType) {
    case "d4":
      return "age";
    case "d6":
      return "background";
    case "d8":
      return "role";
    case "d10":
      return "biggest_problem";
    case "d12":
      return "greatest_desire";
    case "d20":
      return "main_trait";
  }

  return ""
}

const mapPatronData = (diceType: string) => {
  switch (diceType) {
    case "d4":
      return "eagerness_to_hire";
    case "d6":
      return "trustworthiness";
    case "d8":
      return "challenge";
    case "d10":
      return "countervailing_force";
    case "d12":
      return "potential_rewards";
    case "d20":
      return "complications";
  }

  return ""
}

const mapUrbanEncounterData = (diceType: string) => {
  switch (diceType) {
    case "d4":
      return "conflict";
    case "d6":
      return "venue";
    case "d8":
      return "why_pc_involved";
    case "d10":
      return "event_nature";
    case "d12":
      return "antagonists";
    case "d20":
      return "relevant_features";
  }

  return ""
}

const mapWildernessEncounterData = (diceType: string) => {
  switch (diceType) {
    case "d4":
      return "range";
    case "d6":
      return "weather_and_lighting";
    case "d8":
      return "encounter_nature";
    case "d10":
      return "friendly_creatures";
    case "d12":
      return "hostile_creatures";
    case "d20":
      return "relevant_features_nearby";
  }

  return ""
}

const mappers = {
  "npc": mapNpcData,
  "patron": mapPatronData,
  "urban_encounter": mapUrbanEncounterData,
  "wilderness_encounter": mapWildernessEncounterData
};

export const mapOneRollData = (type: string) => {
  return mappers[type]
}
