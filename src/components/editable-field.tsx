import { EditableControls } from "@/components/editable-controls";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import type { FC } from "react";

type EditableFieldProps = {
  initialValue: string;
  onSubmit: (newValue: string) => void;
  fontSize?: string;
  [chakraProp: string]: any;
};

export const EditableField: FC<EditableFieldProps> = ({
  initialValue,
  onSubmit,
  fontSize,
  ...chakraProps
}) => (
  <Editable
    defaultValue={initialValue}
    isPreviewFocusable={true}
    selectAllOnFocus={false}
    submitOnBlur={false}
    onSubmit={onSubmit}
    fontSize={fontSize}
    {...chakraProps}
  >
    <Flex>
      <Tooltip label="Click to edit" shouldWrapChildren={true} hasArrow>
        <EditablePreview px={1} _hover={{ background: "gray.100" }} />
      </Tooltip>
      {/* TODO: prevent from changing to "", required prop doesn't do the trick */}
      <EditableInput
        pl={1}
        mr={1}
        fontSize={fontSize}
        h="fit-content"
        autoFocus
      />
      <EditableControls />
    </Flex>
  </Editable>
);
