# Game Hub

## Chakra UI

is a components library for React, that allows us to build accessible and beautiful UIs super fast.

### Installing Chakra UI with Vite

1. run npm i @chakra-ui/react @emotion/react
2. wrap your entire app with `ChakraProvider`

**Note**: for Chakra UI v3.x we need to pass the value prop to the provider component

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
```

### Layout with Chakra UI "Grid" and "GridItem"

It is just `css grid`, first we need to define our templateAreas just like what we do in CSS, then give that to `area` prop of `GridItem` component to lay them out.

```tsx
import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        nav
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "block" }}
        area={"aside"}
        bg={"gold"}
      >
        aside
      </GridItem>
      <GridItem area={"main"} bg={"dodgerblue"}>
        main
      </GridItem>
    </Grid>
  );
};

export default App;
```

### Show/Hide Components

to show or hide components use `display` prop for that component, it takes an object of break-points like this `display={{ base: "none", lg: "block" }}` it basically modifies the **display** property of that component which means you can use CSS properties.

## Dark Theme in V2

In version 2 we need to have a `theme.tsx` component with these content:

```tsx
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
```

then we have to apply these changes to our `main.tsx` file:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import theme from "./theme.tsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>
);
```

## Switch Theme Color

All the functionalities for switching theme color are already implemented and we just have to use them:

**Chakra UI** has a `useColorMode` hook that gives `toggleColorMode` function and `colorMode` property to change theme color modes:

```tsx
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
```
