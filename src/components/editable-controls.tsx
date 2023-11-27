import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { ButtonGroup, IconButton, useEditableControls } from "@chakra-ui/react";
import { FC } from "react";

type EditableControlsProps = {
  justifyContent?: string;
};

export const EditableControls: FC<EditableControlsProps> = ({
  justifyContent,
}) => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup
      size="xs"
      w="full"
      spacing={1}
      my="auto"
      justifyContent={justifyContent}
    >
      <IconButton
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
        aria-label={getSubmitButtonProps()["aria-label"] ?? "Confirm Changes"}
      />
      <IconButton
        icon={<CloseIcon boxSize={3} />}
        {...getCancelButtonProps()}
        aria-label={getCancelButtonProps()["aria-label"] ?? "Cancel"}
      />
    </ButtonGroup>
  ) : null;
};
