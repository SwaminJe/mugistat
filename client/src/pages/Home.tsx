import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { fetchPlayerProfile } from "../modules/faceit";
import type { UserInfo } from "../types/user";
import Card from "./Card";
import HomeSkeleton from "./skeletons/HomeSkeleton";
import "./styles/home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserInfo>({} as UserInfo);

  useEffect(() => {
    const getPlayerStats = async () => {
      const playerProfile = await fetchPlayerProfile("SwaminG");
      if (!playerProfile) return;
      setUser(playerProfile);
      // const playerStats = await fetchPlayerStats(
      //   playerProfile.player_id,
      //   "cs2",
      // );
      console.log(playerProfile);
      // console.log(playerStats);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    getPlayerStats();
  }, []);

  return (
    <Stack id="home-wrapper">
      <Stack id="home">
        {isLoading ? (
          <HomeSkeleton />
        ) : (
          <Stack>
            <Card user={user} />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Home;
