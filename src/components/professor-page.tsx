import { auth } from "@/clients/firebase/firebase-app";
import type { ProfessorInfo } from "@/common/types";
import { EditableField } from "@/components/editable-field";
import { ExternalLink } from "@/components/external-link";
import { LoginModal } from "@/components/login-modal";
import { MultiLineEditableField } from "@/components/multi-line-editable-field";
import { StatusIcon } from "@/components/status-icon";
import { FirebaseContext } from "@/context/firebase-context";
import { useChangeProfessorAttributes } from "@/hooks/use-change-professor-attributes";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import NextLink from "next/link";
import { useContext, type FC } from "react";

type ProfessorPageProps = {
  info: ProfessorInfo;
  hyphenatedName: string;
  changeSwrData: (data: { info: ProfessorInfo }) => void;
};

export const ProfessorPage: FC<ProfessorPageProps> = ({
  info,
  hyphenatedName,
  changeSwrData,
}) => {
  const [widthLargerThan32em] = useMediaQuery("(min-width: 32em)");
  const { authedUserEmail } = useContext(FirebaseContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    name,
    photo,
    bio: initialBio,
    status: initialStatus,
    email,
    officeLocation,
    officePicture,
    officeHours: initialOfficeHours,
    callendly,
  } = info;
  const authedAsThisProfessor = authedUserEmail === email;
  const { bio, status, officeHours, changeProfessorAttribute } =
    useChangeProfessorAttributes(
      hyphenatedName,
      initialBio,
      initialStatus,
      initialOfficeHours
    );

  return (
    <>
      {widthLargerThan32em && (
        <IconButton
          as={NextLink}
          aria-label="Back"
          icon={<ArrowBackIcon />}
          borderRadius="full"
          pos="fixed"
          top={5}
          left={5}
          size="md"
          href="/"
        />
      )}
      <Flex m={5} justifyContent="center">
        {/* TODO: on large screens, maybe have a layout where the picture is on the left and the stack is on the right, both inside a larger centered div */}
        <Stack divider={<StackDivider />} spacing={3}>
          <Box>
            <Image
              src={photo}
              alt={name}
              borderRadius="md"
              w="100%"
              maxW="25em"
            />
            <Heading size="md" mt={4}>
              {name}
            </Heading>
            {authedAsThisProfessor ? (
              <EditableField
                pos="relative"
                left={-1}
                top={1}
                initialValue={bio}
                onSubmit={(newBio: string) => {
                  changeProfessorAttribute("bio", newBio);
                  info.bio = newBio;
                  changeSwrData({ info });
                }}
              />
            ) : (
              <Text>{bio}</Text>
            )}
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Office Location
            </Heading>
            <ExternalLink text={officeLocation} href={officePicture} />
          </Box>
          <Box>
            <Heading
              size="xs"
              textTransform="uppercase"
              pb={authedAsThisProfessor ? 1 : 2}
            >
              Status
            </Heading>
            <Flex>
              <StatusIcon status={status} />
              {/* TODO: convert to dropdown. IDEA: have a dropdown that a set of statuses that the professor
						has used before (load them from the database) and a "Custom" option at the bottom. Selecting "Custom"
						should trigger a state change that makes an EditableField appear, and whatever they type in it should
						be set as their status AND added to the list of pre-existing statuses in the database, then we can
						hide the EditableField again */}
              {/* One potential drawback of the approach above: professors may set a custom status that they only intend
						to use once, and ones who do this a lot would have very large dropdowns, which would remove some of the
						benefit of a dropdown */}
              {authedAsThisProfessor ? (
                <EditableField
                  fontSize="sm"
                  pl={1}
                  initialValue={status}
                  onSubmit={(newStatus: string) => {
                    changeProfessorAttribute("status", newStatus);
                    info.status = newStatus;
                    changeSwrData({ info });
                  }}
                />
              ) : (
                <Text fontSize="sm" pl={2}>
                  {status}
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
              <Heading
                size="xs"
                textTransform="uppercase"
                pb={authedAsThisProfessor ? 1 : 2}
              >
                Office Hours
              </Heading>
              {authedAsThisProfessor ? (
                <MultiLineEditableField
                  initialValue={officeHours}
                  onSubmit={(newOfficeHours: string) => {
                    changeProfessorAttribute("officeHours", newOfficeHours);
                    info.officeHours = newOfficeHours;
                    changeSwrData({ info });
                  }}
                />
              ) : (
                <Text pt={2} fontSize="sm" whiteSpace="pre-wrap">
                  {officeHours}
                </Text>
              )}
            </Box>
          )}
          {callendly && !authedAsThisProfessor && (
            <ButtonGroup spacing={2} w="100%">
              <LinkBox w="50%">
                <Button variant="solid" colorScheme="blue" w="100%">
                  <LinkOverlay href={callendly} target="_blank">
                    Schedule a Meeting
                  </LinkOverlay>
                </Button>
              </LinkBox>
              <Button
                w="50%"
                variant="ghost"
                colorScheme="blue"
                onClick={onOpen}
              >
                Log In as Professor
              </Button>
            </ButtonGroup>
          )}
          {!callendly && !authedAsThisProfessor && (
            <Button variant="solid" colorScheme="blue" onClick={onOpen}>
              Log In as Professor
            </Button>
          )}
          {authedAsThisProfessor && (
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => signOut(auth)}
            >
              Log Out
            </Button>
          )}
        </Stack>
        <LoginModal isOpen={isOpen} onClose={onClose} pageEmail={email} />
      </Flex>
    </>
  );
};
