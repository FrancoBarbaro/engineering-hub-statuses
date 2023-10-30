import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useState, type FC, type FormEvent, LegacyRef } from "react";

type LoginFormProps = {
  onClose: () => void;
  initialFocusRef: LegacyRef<HTMLInputElement>;
};

export const LoginForm: FC<LoginFormProps> = ({ onClose, initialFocusRef }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validInput = email.trim() !== "" && password.trim() !== "";

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validInput) {
			// TODO: authenticate(email, password);
      setEmail("");
      setPassword("");
      onClose();
    }
  };

  return (
    <form id="login-form" onSubmit={submitHandler}>
      <FormControl>
        <Stack spacing={6}>
          <Stack spacing={0.5}>
            <FormLabel>Email</FormLabel>
            {/* TODO: consider using isInvalid prop, its value would be updated through the submitHandler */}
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
