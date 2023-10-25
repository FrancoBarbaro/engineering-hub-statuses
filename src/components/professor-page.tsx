import { ProfessorInfo } from "@/common/types";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
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
    <Flex m={5} justifyContent="center">
      <Stack divider={<StackDivider />} spacing={3} me={44}>
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
          <Text pt="2" fontSize="sm">
            {officeLocation}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Status
          </Heading>
          <Flex>
            <Text pt="2" fontSize="sm">
              {status}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Email
          </Heading>
          <Text pt="2" fontSize="sm">
            {email}
          </Text>
        </Box>
        {officeHours && (
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Office Hours
            </Heading>
            <Text pt="2" fontSize="sm">
              {officeHours}
            </Text>
          </Box>
        )}
        {callendly && (
          <Box>
            {/* TODO: if prof is signed in, show change status button, otherwise show schedule meeting button */}
            <NextLink href={callendly} target="_blank">
              <Button variant="solid" colorScheme="blue">
                Schedule a Meeting
              </Button>
            </NextLink>
            {/* <Button variant="solid" colorScheme="blue">
            Change Status
          </Button> */}
          </Box>
        )}
      </Stack>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/engineering-hub-api.appspot.com/o/Engineering%20Hub%20Layout.jpg?alt=media&token=e601a0df-a2ba-4fa8-8c1d-5768d5d59f76&_gl=1*11zhi8m*_ga*MTgxMzc0MjM3NS4xNjk3NTcwNzE1*_ga_CW55HF8NVT*MTY5ODIwNDEwMC45LjEuMTY5ODIwNDUxMi41MC4wLjA."
        alt="Layout of the Felgar Hall Engineering Hub"
        w="15em"
        borderRadius="md"
      />
    </Flex>
  );
};
