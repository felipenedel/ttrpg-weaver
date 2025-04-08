import {Box, defineStyle, Field, Input, InputProps} from "@chakra-ui/react"
import React from "react";

export interface TextInputProps extends InputProps {
  fieldName: string;
}

export const TextInput= React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ fieldName, ...props }, ref) => {
  return (
    <Field.Root>
      <Box pos="relative" w="full">
        <Input ref={ref} className="peer" placeholder="" />
        <Field.Label css={floatingStyles}>{fieldName}</Field.Label>
      </Box>
    </Field.Root>
  )
})

TextInput.displayName = 'TextInput';

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
})
