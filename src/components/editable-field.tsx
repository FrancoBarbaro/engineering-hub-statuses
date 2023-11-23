import { EditableControls } from "@/components/editable-field-controls";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import type { FC } from "react";

type EditableFieldProps = {
  initialValue: string;
  onChange: (newValue: string) => void;
	fontSize?: string;
  [chakraProp: string]: any;
};

export const EditableField: FC<EditableFieldProps> = ({
  initialValue,
  onChange,
  fontSize,
  ...chakraProps
}) => {
  return (
    <Editable
      defaultValue={initialValue}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
      onSubmit={onChange}
			fontSize={fontSize}
      {...chakraProps}
    >
      <Flex>
        <Tooltip label="Click to edit" shouldWrapChildren={true} hasArrow>
          <EditablePreview px={1} _hover={{ background: "gray.100" }} />
        </Tooltip>
        <Input
          pl={1}
          mr={1}
          fontSize={fontSize}
          height="fit-content"
          as={EditableInput}
        />
        <EditableControls />
      </Flex>
    </Editable>
  );
};
