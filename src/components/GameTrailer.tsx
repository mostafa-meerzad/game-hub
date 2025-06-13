import uesTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = uesTrailer(gameId);
  const src = data?.results[0]?.data[480];

  if (isLoading) return null;
  if (error) throw error;
  if (!src) return null;
  return <video src={src} poster={data?.results[0]?.preview} controls />;
};

export default GameTrailer;
