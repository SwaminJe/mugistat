import { toast } from "react-toastify";
import type { Game } from "../types/games";
import type { UserInfo } from "../types/user";

const faceItFetcher = async (
  method: "GET",
  endpoint: string,
  queryParams?: string,
) => {
  try {
    const response = await fetch(
      `https://open.faceit.com/data/v4/${endpoint}?${queryParams}`,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_FACEIT_API_KEY,
        },
      },
    );

    return response;
  } catch (error) {
    toast.error("Failed to fetch data from FaceIT API.");
    console.error("Error while fetching: ", error);
  }
};

export const fetchPlayerProfile = async (
  playerNickname: string,
): Promise<UserInfo | undefined> => {
  const response = await faceItFetcher(
    "GET",
    `players`,
    `nickname=${playerNickname}`,
  );
  if (!response) return;

  const result: UserInfo = await response.json();

  return result;
};

export const fetchPlayerStats = async (playerId: string, game: string) => {
  const response = await faceItFetcher(
    "GET",
    `players/${playerId}/games/${game}/stats`,
  );

  if (!response) return;

  return await response.json();
};

export const fetchGame = async (game: string): Promise<Game | null> => {
  const response = await faceItFetcher("GET", `games/${game}`);

  if (!response) return null;

  return await response.json();
};
