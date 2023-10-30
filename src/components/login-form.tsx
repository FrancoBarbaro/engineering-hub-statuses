import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import type { FC, FormEvent } from "react";

type LoginFormProps = {
  onClose: () => void;
};

export const LoginForm: FC<LoginFormProps> = ({ onClose }) => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <form id="login-form" onSubmit={submitHandler}>
      <FormControl>
        <Stack spacing={5}>
          <Stack spacing={1}>
            <FormLabel>OU Email</FormLabel>
            <Input type="email" />
          </Stack>
          <Stack spacing={1}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </Stack>
        </Stack>
      </FormControl>
    </form>
  );
};
