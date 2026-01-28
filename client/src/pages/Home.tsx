import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import "./styles/home.css";

const Home = () => {
  const getPlayerProfile = async (name: string) => {
    const response = await fetch(`https://open.faceit.com/data/v4/players?nickname=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_FACEIT_API_KEY,
      },
    });
    const playerProfile = await response.json();
    console.log(playerProfile);
    return playerProfile;
  };

  useEffect(() => {
    getPlayerProfile("SwaminG");
  });

  return (
    <Stack id="home-wrapper">
      <Stack id="home"></Stack>
    </Stack>
  );
};

export default Home;
