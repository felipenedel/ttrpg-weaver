import {createSystem, defaultConfig, defineConfig} from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {value: "var(--font-space-grotesk)"},
        body: {value: "var(--font-space-grotesk)"},
      },
      colors: {
        spaceBlack: {
          50: { value: "#d9e0f0" },
          100: { value: "#b0b8d1" },
          200: { value: "#868eb3" },
          300: { value: "#5d6495" },
          400: { value: "#333a76" },
          500: { value: "#0a0f1c" },
          600: { value: "#070c17" },
          700: { value: "#050913" },
          800: { value: "#03060e" },
          900: { value: "#01030a" },
          950: { value: "#000105" }
        },
        neonCyan: {
          50:  { value: "#e0fffb" },
          100: { value: "#b3fff3" },
          200: { value: "#80ffeb" },
          300: { value: "#4dffe3" },
          400: { value: "#26ffdc" },
          500: { value: "#00ffe0" },
          600: { value: "#00ccba" },
          700: { value: "#009994" },
          800: { value: "#00666e" },
          900: { value: "#003348" },
          950: { value: "#001a24" }
        }
      },
    },
    semanticTokens: {
      colors: {
        neonCyan: {
          solid:      { value: "colors.neonCyan.700" },   // vibrant neon cyan, primary accent
          contrast:   { value: "#0a0f1c" },   // dark background for strong contrast (your base bg)
          fg:         { value: "#e0fffb" },   // light cyan, good for hover text or subtle glow
          muted:      { value: "#80ffeb" },   // softer neon for less prominent UI elements
          subtle:     { value: "#00ffe010" }, // subtle background or hover effects (transparent neon)
          emphasized: { value: "#26ffdc" },   // used for focus/selected/tab states (brighter variant)
          focusRing:  { value: "#00ffe080" },  // semi-transparent glow for focus outlines,
        }
      },
    }
  },
  globalCss: {
    html: {
      colorPalette: "neonCyan", // Change this to any color palette you prefer
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
