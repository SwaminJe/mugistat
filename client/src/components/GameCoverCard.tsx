import { Stack } from "@mui/material";

interface GameCoverCardProps {
  size?: number | string;
  cover?: string;
}

const GameCoverCard = ({ size = 80, cover = "null" }: GameCoverCardProps) => {
  return (
    <Stack width={size} height={size} borderRadius="5%">
        <img src={cover} />
    </Stack>
  );
};

export default GameCoverCard;