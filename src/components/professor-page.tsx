import type { ProfessorInfo } from "@/common/types";
import { EditableField } from "@/components/editable-field";
import { ExternalLink } from "@/components/external-link";
import { LoginModal } from "@/components/login-modal";
import { StatusIcon } from "@/components/status-icon";
import { useChangeProfessorStatus } from "@/hooks/use-change-professor-status";
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
import { useState, type FC } from "react";

type ProfessorPageProps = {
  info: ProfessorInfo;
  hyphenatedName: string;
};

export const ProfessorPage: FC<ProfessorPageProps> = ({
  info,
  hyphenatedName,
}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    name,
    photo,
    bio,
    status: initialStatus,
    email,
    officeLocation,
    officePicture,
    officeHours,
    callendly,
  } = info;
  const { changeProfessorStatus, updatedStatus } =
    useChangeProfessorStatus(initialStatus);

  return (
    <Flex m={5} justifyContent="center" flexWrap="wrap">
      <Stack divider={<StackDivider />} spacing={3}>
        <Box>
          <Image
            src={photo}
            alt={name}
            borderRadius="md"
            w="100%"
            maxW="25em"
          />
          <Heading size="md" mt={4} mb={2}>
            {name}
          </Heading>
          <Text>{bio}</Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Office Location
          </Heading>
          <ExternalLink text={officeLocation} href={officePicture} />
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Status
          </Heading>
          <Flex pt={2}>
            <StatusIcon status={updatedStatus} />
            {loggedIn ? (
              <EditableField
                initialValue={initialStatus}
                onChange={(newStatus: string) =>
                  changeProfessorStatus(hyphenatedName, newStatus)
                }
              />
            ) : (
              <Text fontSize="sm" pl={1.5}>
                {initialStatus}
              </Text>
            )}
          </Flex>
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
        {callendly && !loggedIn && (
          <ButtonGroup spacing={2} w="100%">
            <LinkBox w="50%">
              <Button variant="solid" colorScheme="blue" w="100%">
                <LinkOverlay href={callendly} target="_blank">
                  Schedule a Meeting
                </LinkOverlay>
              </Button>
            </LinkBox>
            <Button w="50%" variant="ghost" colorScheme="blue" onClick={onOpen}>
              Log In as Professor
            </Button>
          </ButtonGroup>
        )}
        {!callendly && !loggedIn && (
          <Button variant="solid" colorScheme="blue" onClick={onOpen}>
            Log In as Professor
          </Button>
        )}
      </Stack>
      <LoginModal isOpen={isOpen} onClose={onClose} setLoggedIn={setLoggedIn} />
    </Flex>
  );
};
