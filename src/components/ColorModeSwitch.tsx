import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  const icon = useColorModeValue(
    <MoonIcon boxSize={4} />,
    <SunIcon boxSize={4} />
  );
  const ariaLabel = useColorModeValue(
    "Switch to dark mode",
    "Switch to light mode"
  );

  return (
    <HStack>
      <IconButton
        aria-label={ariaLabel}
        icon={icon}
        variant="ghost"
        isRound
        onClick={toggleColorMode}
        _focus={{ boxShadow: "none" }}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
