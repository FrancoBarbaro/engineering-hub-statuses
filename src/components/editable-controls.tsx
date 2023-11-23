import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { ButtonGroup, IconButton, useEditableControls } from "@chakra-ui/react";
import { FC } from "react";

export const EditableControls: FC = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
    useEditableControls();

  return isEditing ? (
    <ButtonGroup size="xs" w="full" spacing={1} my="auto">
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
