import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {}
    }
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`
  },
  colors: {
    gray: {
      "100": "#f5f8fa",
      "500": "#DADADA",
      "600": "#47585b",
      "700": "#999999"
    },
    black: "#000000",
    yellow: "#ffba08"
  }
});
