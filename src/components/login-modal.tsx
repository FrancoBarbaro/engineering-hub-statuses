import { LoginForm } from "@/components/login-form";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import type { FC } from "react";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Log In as Professor</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <LoginForm onClose={onClose} />
      </ModalBody>
      <ModalFooter>
        <Button
          colorScheme="blue"
          mr={3}
          form="login-form"
          type="submit"
          // onClick={onClose}
        >
          Log In
        </Button>
        <Button variant="ghost" colorScheme="blue" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
