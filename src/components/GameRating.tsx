import { Box } from "@chakra-ui/react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

interface Props {
  rating: number;
}

const GameRating = ({ rating }: Props) => {
  return <Box> <Rating  style={{ maxWidth: 80 }} value={rating}/></Box>;
};

export default GameRating;
