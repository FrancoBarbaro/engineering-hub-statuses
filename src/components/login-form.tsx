import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import {
  useState,
  type Dispatch,
  type FC,
  type FormEvent,
  type LegacyRef,
  type SetStateAction,
} from "react";

type LoginFormProps = {
  onClose: () => void;
  initialFocusRef: LegacyRef<HTMLInputElement>;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  pageEmail: string;
};

export const LoginForm: FC<LoginFormProps> = ({
  onClose,
  initialFocusRef,
  setLoggedIn,
  pageEmail,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validInput = email.trim() !== "" && password.trim() !== "";
  const toast = useToast();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validInput) {
      return;
    }

    onClose();
    setEmail("");
    setPassword("");

    const dummyAuthPromise = new Promise((resolve, fail) => {
      setTimeout(() => {
        if (email == pageEmail) {
          setLoggedIn(true);
          resolve(200);
        }
        fail();
      }, 2000);
    });

    toast.promise(dummyAuthPromise, {
      success: {
        title: "You're Authenticated!",
        description: "You can now click on the status field to edit it",
        duration: 3000,
      },
      error: {
        title: "Authentication Failed!",
        description: "Incorrect email or password",
        duration: 3000,
      },
      loading: {
        title: "Checking Credentials...",
        description: "This may take a few seconds",
      },
    });
  };

  return (
    <form id="login-form" onSubmit={submitHandler}>
      <FormControl>
        <Stack spacing={6}>
          <Stack spacing={0.5}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your OU email"
              ref={initialFocusRef}
            />
          </Stack>
          <Stack spacing={0.5}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Your password for this site"
            />
          </Stack>
        </Stack>
      </FormControl>
    </form>
  );
};
