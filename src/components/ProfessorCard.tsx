import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";

type ProfessorCardProps = {
  name: string;
  photo: string;
  bio: string;
  status: "In Office" | "Out of Office";
  officeLocation: string;
  callendly?: string;
};

export const ProfessorCard: FC<ProfessorCardProps> = ({
  name,
  photo,
  bio,
  status,
  officeLocation,
  callendly,
}) => (
  <LinkBox>
    <Card maxW="sm" m={4}>
      <CardBody>
        <Stack divider={<StackDivider />} spacing={4}>
          <Box>
            <Center>
              <Image src={photo} alt={name} borderRadius="lg" />
            </Center>
            <Stack mt="6" spacing="3">
              <Heading size="md">
                <LinkOverlay
                  as={NextLink}
                  href={`professors/${name
                    .substring(4)
                    .replace(" ", "-")
                    .toLowerCase()}`}
                >
                  {name}
                </LinkOverlay>
              </Heading>
              <Text>{bio}</Text>
            </Stack>
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Office Hours
          </Button>
          {callendly && (
            <NextLink href={callendly} target="_blank">
              <Button variant="solid" colorScheme="blue">
                Schedule a Meeting
              </Button>
            </NextLink>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  </LinkBox>
);
