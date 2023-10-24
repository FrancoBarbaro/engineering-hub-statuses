import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import type { FC } from "react";

const ProfessorPage: FC = () => (
  <>
    <Box>
      <Heading size="xs" textTransform="uppercase">
        Office Location
      </Heading>
      <Text pt="2" fontSize="sm">
				Office Location
			</Text>
    </Box>
    <Box>
      <Heading size="xs" textTransform="uppercase">
        Status
      </Heading>
      <Flex>
        {status == "In Office" && (
          <CheckCircleIcon color="green.400" h="100%" pt={2.5} />
        )}
        {status == "Out of Office" && (
          <WarningIcon color="red" h="100%" pt={2.5} />
        )}
        <Text pt="2" fontSize="sm" ps={1.5}>
          {status}
        </Text>
      </Flex>
    </Box>
  </>
);

export default ProfessorPage;
