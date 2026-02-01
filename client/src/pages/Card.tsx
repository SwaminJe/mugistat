import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IT } from 'country-flag-icons/react/3x2';
import EloDotBar from "../components/EloDotBar";
import type { UserInfo } from "../user/user";
import { levelColorIndicator } from "../utils/utils";
import './styles/utils.css';

interface CardProps {
  user: UserInfo;
}

const Card = ({ user }: CardProps) => {
  return (
    <Stack display="flex" width="100%" height="100%" direction="row" gap={2}>
      {/* Left Side */}
      <Stack
        display="flex"
        direction="column"
        width="100%"
        height="100%"
        flex={1}
        gap={2}
      >
        <Stack display="flex" direction="row" width="100%" flex={0.3} gap={2}>
          <Avatar
            alt="Avatar's Player"
            src={user.avatar}
            sx={{ width: 240, height: 240 }}
          />
          <Stack direction="column" flex={1} gap={2}>
            <Stack direction="column">
              <Stack direction="row" alignItems={"center"} gap={1}>
                <Typography
                  variant="h1"
                  fontSize="3rem"
                  fontWeight={500}
                  color="text.primary"
                  letterSpacing={1}
                >
                  {user.nickname}
                </Typography>
                <Typography
                  variant="h1"
                  fontSize="2rem"
                  fontWeight={500}
                  pt={0.5}
                  color={levelColorIndicator[user.games.cs2.skill_level - 1]}
                >
                  {user.games.cs2.skill_level}
                </Typography>
              </Stack>
              <EloDotBar
                level={user.games.cs2.skill_level}
                dotSize={10}
                width={180}
              />
            </Stack>
            <Stack direction="column">
              <Stack
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  fontSize="1rem"
                  fontWeight={300}
                  color="text.primary"
                >
                  NAME
                </Typography>
                <Typography
                  fontSize="1.2rem"
                  letterSpacing={1}
                  fontWeight={900}
                  color="text.primary"
                >
                  {user.games.cs2.game_player_name}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  fontSize="1rem"
                  fontWeight={300}
                  color="text.primary"
                >
                  REGION
                </Typography>
                <IT title="Italy" className="flag" />
              </Stack>
              <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
            </Stack>
            <Stack
              direction="row"
              gap={2}
              width={"100%"}
              mt={2}
              fontFamily={"Jersey"}
            >
              <Skeleton variant="rounded" width={80} height={80} />
              <Skeleton variant="rounded" width={80} height={80} />
              <Skeleton variant="rounded" width={80} height={80} />
              <Skeleton variant="rounded" width={80} height={80} />
            </Stack>
          </Stack>
        </Stack>
        <Stack display="flex" flex={0.7} gap={2}>
          <Skeleton variant="rounded" width="100%" height="100%" />
          <Skeleton variant="rounded" width="100%" height="100%" />
        </Stack>
      </Stack>

      {/* Right Side */}
      <Stack
        display="flex"
        direction="column"
        width="100%"
        height="100%"
        flex={1}
        gap={2}
      >
        <Skeleton variant="rounded" width="100%" height="100%" />
        <Skeleton variant="rounded" width="100%" height="100%" />
      </Stack>
    </Stack>
  );
};

export default Card;
