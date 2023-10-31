import type { BasicInfoObject } from "@/common/types";
import { StatusIcon } from "@/components/status-icon";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";

type ProfessorCardProps = {
  info: BasicInfoObject;
};

export const ProfessorCard: FC<ProfessorCardProps> = ({ info }) => {
  const { name, hyphenatedName, photo, bio, status } = info;

  return (
    <LinkBox>
      {/* TODO: make width responsive with {{ xs: 15em, sm: 20em, etc. }} */}
      <Card w="15em" m={4} borderRadius="lg">
        <CardBody>
          <Stack spacing={3}>
            <Image src={photo} alt={name} borderRadius="md" w="100%" />
            <Heading size="md" mt={3}>
              <LinkOverlay as={NextLink} href={`professors/${hyphenatedName}`}>
                {name}
              </LinkOverlay>
            </Heading>
            <Text>{bio}</Text>
            <Flex>
              <StatusIcon status={status} />
              <Text fontSize="sm" pl={1.5}>
                {status}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </LinkBox>
  );
};
