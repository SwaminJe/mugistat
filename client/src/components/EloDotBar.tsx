import Stack from "@mui/material/Stack";
import { useState } from "react";
import { levelColors } from "../utils/utils";
import "./styles/elodotbar.css";

interface EloDotBarProps {
  level: number;
  dotSize: number;
  width: number | string;
}

const EloDotBar = ({ level, dotSize, width }: EloDotBarProps) => {
  const totalDots = 10;
  

  const Dot = ({ index, dotSize }: { index: number; dotSize: number }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const backgroundColor =
      index <= level
        ? index <= 2
          ? levelColors.lame
          : index <= 4
            ? levelColors.nice
            : index <= 7
              ? levelColors.good
              : index <= 9
                ? levelColors.veryGood
                : levelColors.excellent
        : "var(--primary-color)";

    return (
      <Stack
        key={index}
        width={dotSize}
        height={dotSize}
        borderRadius="100%"
        boxShadow={
          index <= level ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" : "none"
        }
        onMouseEnter={() => setIsAnimating(true)}
        onAnimationEnd={() => setIsAnimating(false)}
        sx={{
          backgroundColor,
          animation:
            isAnimating && index <= level
              ? "bounce 0.8s ease 0s 1 normal"
              : "none",
        }}
      />
    );
  };

  return (
    <Stack
      direction="row"
      width={width}
      height={20}
      justifyContent="space-between"
      alignItems="center"
    >
      {Array.from({ length: totalDots }, (_, i) => (
        <Dot key={i + 1} index={i + 1} dotSize={dotSize}/>
      ))}
    </Stack>
  );
};

export default EloDotBar;
