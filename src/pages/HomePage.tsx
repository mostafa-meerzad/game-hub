import { Box, Flex, Grid, GridItem, HStack, Stack } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
     <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      
      <GridItem
        display={{ base: "none", lg: "block" }}
        area={"aside"}
        paddingX={{base: "0", md: 5}}
      >
        <GenreList />
      </GridItem>
      <GridItem area={"main"}>
        <Box padding={2}>
          <GameHeading />
          <Flex gap={5} marginBottom={5} direction={{base:"column", sm:"row"
          }}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage