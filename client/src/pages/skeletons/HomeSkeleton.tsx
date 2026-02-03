import { Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const HomeSkeleton = () => {
  return (
    <Stack display="flex" width="100%" height="100%" direction="row" gap={2}>

      {/* Left Side */}
      <Stack display="flex" direction="column" width="100%" height="100%" flex={1} gap={2}>
        <Stack display="flex" direction="row" width="100%" flex={0.3} gap={2}>
          <Skeleton variant="circular" width={240} height={240} />
          <Stack direction="column" flex={1}>
            <Stack direction="row" width="100%" alignItems={"center"} gap={1}>
                <Skeleton variant="text" sx={{ fontSize: "3rem" }} width="90%" />
                <Skeleton variant="rectangular" width="3em" height="3em" />
            </Stack>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Stack direction="row" gap={2} width={"100%"} mt={2}>
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
      <Stack display="flex" direction="column" width="100%" height="100%" flex={1} gap={2}>
        <Skeleton variant="rounded" width="100%" height="100%" />
        <Skeleton variant="rounded" width="100%" height="100%" />
      </Stack>
    </Stack>
  );
};

export default HomeSkeleton;
