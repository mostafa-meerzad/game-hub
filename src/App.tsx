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
