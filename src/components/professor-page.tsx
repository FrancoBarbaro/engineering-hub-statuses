import { ProfessorInfo } from "@/common/types";
import { ExternalLink } from "@/components/external-link";
import { LoginModal } from "@/components/login-modal";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { FC } from "react";

type ProfessorPageProps = {
  info: ProfessorInfo;
};

export const ProfessorPage: FC<ProfessorPageProps> = ({ info }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        {callendly ? (
          <ButtonGroup spacing={2}>
            <LinkBox>
              <Button variant="solid" colorScheme="blue">
                <LinkOverlay href={callendly} target="_blank">
                  Schedule a Meeting
                </LinkOverlay>
              </Button>
            </LinkBox>
            <Button variant="ghost" colorScheme="blue" onClick={onOpen}>
              Log In as Professor
            </Button>
          </ButtonGroup>
        ) : (
          <Button variant="solid" colorScheme="blue" onClick={onOpen}>
            Log In as Professor
          </Button>
        )}
      </Stack>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
