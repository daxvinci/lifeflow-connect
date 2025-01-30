import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas/authSchemas";
import { useSignUp } from "@/hooks/useSignUp";
import { FormField } from "./FormField";

export const SignUpForm = () => {
  const { signUp } = useSignUp();
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(signUp)} className="space-y-4">
        <FormField
          form={form}
          name="name"
          label="Name"
          placeholder="Enter your name"
        />
        <FormField
          form={form}
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <FormField
          form={form}
          name="password"
          label="Password"
          type="password"
          placeholder="Create a password"
        />
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};