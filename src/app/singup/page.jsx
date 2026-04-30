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
import { useRouter } from "next/navigation";

const SingInpages = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/",
    });
    console.log({ data, error });
    if (!error) {
      router.push("/");
    }

    // console.log({ name, email, url, password });
  };
  
  return (
    <div className="border p-4 my-6  justify-center mx-auto ">
      <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />

          <FieldError />
        </TextField>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="text">
          <Label>image</Label>
          <Input placeholder="Enter your image" />

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
      
    </div>
  );
};

export default SingInpages;
