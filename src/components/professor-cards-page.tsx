import type { BasicInfo } from "@/common/types";
import { ProfessorCard } from "@/components/professor-card";
import { Flex } from "@chakra-ui/react";
import type { FC } from "react";

type ProfessorCardsPageProps = {
  data: BasicInfo;
};

export const ProfessorCardsPage: FC<ProfessorCardsPageProps> = ({ data }) => (
  <Flex flexWrap="wrap" justifyContent="space-around">
    {data.map((info) => (
      <ProfessorCard key={info.hyphenatedName} info={info} />
    ))}
  </Flex>
);
