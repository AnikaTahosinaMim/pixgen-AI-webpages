"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const SingInpages = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email,
      password,

      callbackURL: "/",
    });

    console.log({ data, error });

    // console.log({ name, email, url, password });
  };
  const handleGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="border p-4 my-6  justify-center mx-auto ">
      <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField isRequired minLength={8} name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <p>or Singup oder </p>
      <Button variant="outline" onClick={handleGoogle}>
        Continue with google
      </Button>
    </div>
  );
};

export default SingInpages;
