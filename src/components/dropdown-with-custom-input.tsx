import { EditableField } from "@/components/editable-field";
import { StatusIcon } from "@/components/status-icon";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import { useState, type FC } from "react";

type DropdownWithCustomInputProps = {
  status: string;
  changeState: (newStatus: string) => void;
};

export const DropdownWithCustomInput: FC<DropdownWithCustomInputProps> = ({
  status,
  changeState,
}) => {
  let initialOptionSelected;
  if (status === "In Office" || status === "Out of Office") {
    initialOptionSelected = status;
  } else {
    initialOptionSelected = "Custom";
  }
  const [optionSelected, setOptionSelected] = useState(initialOptionSelected);

  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          aria-label="Options"
          leftIcon={<StatusIcon status={optionSelected} />}
          rightIcon={<ChevronDownIcon />}
          px={1.5}
          pos="relative"
          left={-1.5}
          variant="ghost"
          fontWeight="normal"
        >
          {optionSelected}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            value={optionSelected}
            textTransform="uppercase"
            fontSize="xs"
            textColor="gray.500"
            type="radio"
          >
            <MenuItemOption
              _checked={{ backgroundColor: "gray.200" }}
              value="In Office"
              icon={null}
              onClick={() => {
                changeState("In Office");
                setOptionSelected("In Office");
              }}
            >
              <HStack>
                <StatusIcon status="In Office" />
                <Text>In Office</Text>
              </HStack>
            </MenuItemOption>
            <MenuItemOption
              _checked={{ backgroundColor: "gray.200" }}
              value="Out of Office"
              icon={null}
              onClick={() => {
                changeState("Out of Office");
                setOptionSelected("Out of Office");
              }}
            >
              <HStack>
                <StatusIcon status="Out of Office" />
                <Text>Out of Office</Text>
              </HStack>
            </MenuItemOption>
            <MenuItemOption
              _checked={{ backgroundColor: "gray.200" }}
              value="Custom"
              icon={null}
              onClick={() => setOptionSelected("Custom")}
            >
              <HStack>
                <StatusIcon status="Custom" />
                <Text>Custom</Text>
              </HStack>
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      {optionSelected === "Custom" && (
        <EditableField
          startWithEditView={true}
          initialValue=""
          placeholder="Status"
          ml={2}
          onSubmit={changeState}
        />
      )}
    </>
  );
};
