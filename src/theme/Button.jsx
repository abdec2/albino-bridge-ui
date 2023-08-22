import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  background: "brand.100",
  color: "white",
  borderRadius: "md",
  fontWeight: "normal",
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
});
