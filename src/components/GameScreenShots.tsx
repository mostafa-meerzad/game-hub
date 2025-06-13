import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShot from "../hooks/useScreenShot";
import { motion } from "framer-motion";

interface Props {
  gameId: number;
  onClick: (imgURL: string | undefined) => void;
}

const GameScreenShots = ({ gameId, onClick }: Props) => {
  const { data, error, isLoading } = useScreenShot(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {data?.results.map((file) => (
        <Box as={motion.div} whileHover={{ scale: 1.03 }} cursor={"pointer"}>
          <Image
            key={file.id}
            src={file.image}
            onClick={() => onClick(file.image)}
            borderRadius={"md"}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
