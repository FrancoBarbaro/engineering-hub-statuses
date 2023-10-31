import { changeProfessorStatus } from "@/api-functions/change-professor-status";
import { EditableControls } from "@/components/editable-field-controls";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Input,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import type { FC } from "react";

type EditableFieldProps = {
  initialValue: string;
  hyphenatedName: string;
};

export const EditableField: FC<EditableFieldProps> = ({
  initialValue,
  hyphenatedName,
}) => {
  return (
    <Editable
      defaultValue={initialValue}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
      fontSize="sm"
      pl={1}
      onSubmit={(newStatus) => changeProfessorStatus(hyphenatedName, newStatus)}
    >
      <Flex>
        <Tooltip label="Click to edit" shouldWrapChildren={true}>
          <EditablePreview
            px={1}
            _hover={{ background: useColorModeValue("gray.100", "gray.700") }}
          />
        </Tooltip>
        <Input
          pl={1}
          mr={1}
          fontSize="sm"
          height="fit-content"
          as={EditableInput}
        />
        <EditableControls />
      </Flex>
    </Editable>
  );
};
