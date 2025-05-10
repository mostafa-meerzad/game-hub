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
