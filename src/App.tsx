import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

const App = () => {

  
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "block" }}
        area={"aside"}
        bg={"gold"}
      >
        aside
      </GridItem>
      <GridItem area={"main"} bg={"dodgerblue"}>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
};

export default App;
