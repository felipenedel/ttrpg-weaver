import {createListCollection} from "@chakra-ui/react";

export const LanguageOptions = createListCollection({
  "items": [
    {"label": "Arabic", "value": "arabic"},
    {"label": "Chinese", "value": "chinese"},
    {"label": "English", "value": "english"},
    {"label": "Greek", "value": "greek"},
    {"label": "Indian", "value": "indian"},
    {"label": "Japanese", "value": "japanese"},
    {"label": "Latin", "value": "latin"},
    {"label": "Nigerian", "value": "nigerian"},
    {"label": "Russian", "value": "russian"},
    {"label": "Spanish", "value": "spanish"}
  ]
})

export const randomLanguage = () => {
  const options = LanguageOptions["items"]

  return options[Math.floor(Math.random() * options.length)].value
}
