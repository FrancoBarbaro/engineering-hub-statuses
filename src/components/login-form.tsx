import { auth } from "@/clients/firebase/firebase-app";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
  type LegacyRef,
} from "react";

type LoginFormProps = {
  onClose: () => void;
  initialFocusRef: LegacyRef<HTMLInputElement>;
  pageEmail: string;
};

export const LoginForm: FC<LoginFormProps> = ({
  onClose,
  initialFocusRef,
  pageEmail,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validInput = email.trim() !== "" && password.trim() !== "";
  const toast = useToast();

  const signInHandler = async () => {
    if (email !== pageEmail) {
      return false;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      return false;
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validInput) {
      return;
    }

    const authStatusPromise = new Promise(async (resolve, fail) => {
      (await signInHandler()) ? resolve(200) : fail();
    });

    onClose();

    toast.promise(authStatusPromise, {
      success: {
        title: "You're Authenticated!",
        description: "You can now click on a field to edit it",
        duration: 2000,
      },
      error: {
        title: "Authentication Failed!",
        description: "Incorrect email or password",
        duration: 2000,
      },
      loading: {
        title: "Checking Credentials...",
        description: "This may take a few seconds",
      },
    });

    setEmail("");
    setPassword("");
  };

  return (
    <form id="login-form" onSubmit={submitHandler}>
      <FormControl>
        <Stack spacing={6}>
          <Stack spacing={0.5}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
              placeholder="Your OU email"
              ref={initialFocusRef}
            />
          </Stack>
          <Stack spacing={0.5}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
              placeholder="Your password for this site"
            />
          </Stack>
        </Stack>
      </FormControl>
    </form>
  );
};
