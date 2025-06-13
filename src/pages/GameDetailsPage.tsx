import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import GameScreenShots from "../components/GameScreenShots";
import GameTrailer from "../components/GameTrailer";
import PreviewModal from "../components/PreviewModal";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [previewSrc, setPreviewSrc] = useState<string | undefined>(undefined);

  const openPreview = (src: string | undefined) => {
    onOpen();
    setPreviewSrc(src);
  };

  const onClosePreview = () => {
    setPreviewSrc(undefined);
    onClose();
  };

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} px={5} gap={5}>
      <PreviewModal isOpen={isOpen} onClose={onClosePreview} imgSrc={previewSrc}/>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText text={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenShots gameId={game.id} onClick={openPreview} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
