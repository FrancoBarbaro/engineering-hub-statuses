import { ProfessorInfo } from "@/common/types";
import { ExternalLink } from "@/components/external-link";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import type { FC } from "react";

type ProfessorPageProps = {
  info: ProfessorInfo;
};

export const ProfessorPage: FC<ProfessorPageProps> = ({ info }) => {
  const {
    name,
    photo,
    bio,
    status,
    email,
    officeLocation,
    officeHours,
    callendly,
  } = info;

  return (
    <Flex m={5} justifyContent="center" flexWrap="wrap">
      <Stack divider={<StackDivider />} spacing={3}>
        <Box>
          <Image src={photo} alt={name} borderRadius="md" w="100%" />
          <Heading size="md" mt={4} mb={2}>
            {name}
          </Heading>
          <Text>{bio}</Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Office Location
          </Heading>
          <ExternalLink
            text={officeLocation}
            href="https://firebasestorage.googleapis.com/v0/b/engineering-hub-api.appspot.com/o/Engineering%20Hub%20Layout.jpg?alt=media&token=e601a0df-a2ba-4fa8-8c1d-5768d5d59f76&_gl=1*11zhi8m*_ga*MTgxMzc0MjM3NS4xNjk3NTcwNzE1*_ga_CW55HF8NVT*MTY5ODIwNDEwMC45LjEuMTY5ODIwNDUxMi41MC4wLjA."
          />
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Status
          </Heading>
          <Text pt={2} fontSize="sm">
            {status}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Email
          </Heading>
          <ExternalLink text={email} href={`mailto:${email}`} />
        </Box>
        {officeHours && (
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Office Hours
            </Heading>
            <Text pt={2} fontSize="sm">
              {officeHours}
            </Text>
          </Box>
        )}
        {/* TODO: add another conditional here so it's like (callendly || loggedIn) && {JSX} " */}
        {callendly && (
          <Box>
            {/* TODO: if prof is signed in, show change status button, otherwise show schedule meeting button */}
            <LinkBox>
              <Button variant="solid" colorScheme="blue" w="100%">
                <LinkOverlay href={callendly} target="_blank">
                  Schedule a Meeting
                </LinkOverlay>
              </Button>
            </LinkBox>
            {/* <Button variant="solid" colorScheme="blue">
              Change Status
            </Button> */}
          </Box>
        )}
      </Stack>
    </Flex>
  );
};
