import { Box, Skeleton } from "@chakra-ui/react";
import type { FC } from "react";

export const ProfessorPageSkeleton: FC = () => (
  <Box>
    <Skeleton w="30em" h="30em" />
  </Box>
);
