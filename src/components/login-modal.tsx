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
import { useRef, type Dispatch, type FC, type SetStateAction } from "react";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  pageEmail: string;
};

export const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
  setLoggedIn,
  pageEmail,
}) => {
  const initialFocusRef = useRef(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialFocusRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log In as Professor</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <LoginForm
            onClose={onClose}
            initialFocusRef={initialFocusRef}
            setLoggedIn={setLoggedIn}
            pageEmail={pageEmail}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} form="login-form" type="submit">
            Log In
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
