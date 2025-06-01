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

## Create apiClient using Axios

to avoid repetition of api URLs, also make handling API requests much easier and professional.

1. first of all create a file in `src/services/api-client.ts` and put:

```ts
import axios from "axios";
// axios.create() function creates an axios client instance which we'll use it to make requests.
// as we export this, it will be available as `apiClient` like so "import apiClient from "../services/api-client""
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  // this is how to include api-key in requests
  params: {
    key: "d248087d0e624e84b6e0c697d6ee0763",
  },
});
```

2. use apiClient to make backend calls

```tsx
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
```


## NOTE

before removing a block of code we should always evaluate the cost of removing it. meaning we should check where it is being used, so we can safely remove it.

### shift + f12 --> shows all the places the selection is used.

### when you encounter a piece of code that doesn't seem to belong anywhere but we're using it in multiple places, the best way to deal with this is to put it where the other piece of code is being used along side with it