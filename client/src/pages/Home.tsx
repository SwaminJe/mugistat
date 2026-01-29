import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { fetchPlayerProfile, fetchPlayerStats } from "../modules/faceit";
import HomeSkeleton from "./skeletons/HomeSkeleton";
import "./styles/home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPlayerStats = async () => {
      const playerProfile = await fetchPlayerProfile("SwaminG");
      if (!playerProfile) return;
      const playerStats = await fetchPlayerStats(playerProfile.player_id, "cs2");
      console.log(playerProfile);
      console.log(playerStats);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 1000);
    };

    getPlayerStats();
  }, []);

  return (
    <Stack id="home-wrapper">
      <Stack id="home">{isLoading ? <HomeSkeleton /> : <Stack></Stack>}</Stack>
    </Stack>
  );
};

export default Home;
