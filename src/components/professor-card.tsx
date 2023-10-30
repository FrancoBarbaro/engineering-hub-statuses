import { BasicInfo } from "@/common/types";
import { CheckCircleIcon, InfoIcon, WarningIcon } from "@chakra-ui/icons";
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
  info: BasicInfo;
};

export const ProfessorCard: FC<ProfessorCardProps> = ({ info }) => {
  const { name, hyphenatedName, photo, bio, status } = info;

  return (
    <LinkBox>
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
              {status.toLowerCase() == "in office" && (
                <CheckCircleIcon color="green.400" my="auto" />
              )}
              {status.toLowerCase() == "out of office" && (
                <WarningIcon color="red" my="auto" />
              )}
              {status.toLowerCase() != "in office" &&
                status.toLowerCase() != "out of office" && (
                  <InfoIcon color="blue.500" my="auto" />
                )}
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
