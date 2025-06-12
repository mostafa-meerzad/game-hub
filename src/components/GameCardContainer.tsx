import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionBox = motion(Box);
const GameCardContainer = ({ children }: PropsWithChildren) => {
  return (
    <MotionBox
      borderRadius={10}
      overflow={"hidden"}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      boxShadow="md"
      _hover={{ boxShadow: "xl" }}
      cursor="pointer"
    >
      {children}
    </MotionBox>
  );
};

export default GameCardContainer;
