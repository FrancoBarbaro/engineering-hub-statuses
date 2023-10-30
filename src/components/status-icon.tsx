import { CheckCircleIcon, InfoIcon, WarningIcon } from "@chakra-ui/icons";
import type { FC } from "react";

type StatusIconProps = {
  status: string;
};

export const StatusIcon: FC<StatusIconProps> = ({ status }) => {
  switch (status.toLowerCase()) {
    case "in office":
      return <CheckCircleIcon color="green.400" my="auto" boxSize={3.5} />;
    case "out of office":
      return <WarningIcon color="red" my="auto" boxSize={3.5} />;
    default:
      return <InfoIcon color="blue.500" my="auto" boxSize={3.5} />;
  }
};
