import { Flex, Skeleton } from "@chakra-ui/react";
import type { FC } from "react";

export const ProfessorCardsPageSkeleton: FC = () => (
  <Flex>
    <Skeleton w="30em" h="30em" />
  </Flex>
);
