import { Center, Spinner } from "@chakra-ui/react";
import type { FC } from "react";

export const LoadingSpinner: FC = () => (
  <Center w="100vw" h="100vh">
    <Spinner thickness="4px" speed="0.5s" color="blue.500" size="xl" />
  </Center>
);
