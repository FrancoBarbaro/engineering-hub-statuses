import { EditableControls } from "@/components/editable-controls";
import {
  Editable,
  EditablePreview,
  EditableTextarea,
  Tooltip,
} from "@chakra-ui/react";
import type { FC } from "react";
import TextareaAutosize from "react-textarea-autosize";

type MultiLineEditableFieldProps = {
  initialValue: string;
  onSubmit: (newValue: string) => void;
  [chakraProp: string]: any;
};

export const MultiLineEditableField: FC<MultiLineEditableFieldProps> = ({
  onSubmit,
  initialValue,
  ...chakraProps
}) => (
  <Editable
    defaultValue={initialValue}
    isPreviewFocusable={true}
    selectAllOnFocus={false}
    submitOnBlur={false}
    onSubmit={onSubmit}
    {...chakraProps}
  >
    <Tooltip label="Click to edit" shouldWrapChildren={true} hasArrow>
      <EditablePreview
        px={1}
        whiteSpace="pre-wrap"
        _hover={{ background: "gray.100" }}
      />
    </Tooltip>
    {/* TODO: prevent from changing to "", required prop doesn't do the trick */}
    <EditableTextarea
      as={TextareaAutosize}
      resize="none"
      pl={1}
      mt={0}
      fontSize="sm"
      h="auto"
      css={{
        "&::-webkit-scrollbar": { width: 0 },
      }}
    />
    <EditableControls justifyContent="end" />
  </Editable>
);
