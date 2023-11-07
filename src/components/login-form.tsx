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
};

export const LoginForm: FC<LoginFormProps> = ({
  onClose,
  initialFocusRef,
  setLoggedIn,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validInput = email.trim() !== "" && password.trim() !== "";
  const toast = useToast();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validInput) {
      // TODO: make sure that if a professor is signed in, they can only change their info and not others'
      // the above leads me to question: should i even have an email input? the only way i can enforce the
      // above is by checking wether the email associated with the professor page corresponds to the email
      // of the user logged in
      onClose();
      setEmail("");
      setPassword("");

      const dummyAuthPromise = new Promise((resolve, fail) => {
        setTimeout(() => {
          setLoggedIn(true);
          resolve(200);
        }, 2000);
      });

      toast.promise(dummyAuthPromise, {
        success: {
          title: "You're Authenticated!",
          description: "You can now click on the status field to edit it",
        },
        error: {
          title: "Authentication Failed!",
          description: "Incorrect email or password",
        },
        loading: {
          title: "Checking Credentials...",
          description: "This may take a few seconds",
        },
      });
    }
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
