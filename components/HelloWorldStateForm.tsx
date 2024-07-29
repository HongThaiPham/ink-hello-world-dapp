"use client";
import React from "react";
import { Button } from "./ui/button";
import useSetHelloWorldState from "@/hooks/useSetHelloWorldState";
import { useInkathon } from "@scio-labs/use-inkathon";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
type Props = {};

const formSchema = z.object({
  message: z.string({ message: "Message is required" }).min(5).max(100),
});

type formSchemaType = z.infer<typeof formSchema>;

const HelloWorldStateForm: React.FC<Props> = ({}) => {
  const { isConnected, activeAccount } = useInkathon();
  const { mutate } = useSetHelloWorldState();
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  if (!isConnected || !activeAccount) {
    return (
      <Alert variant={"destructive"}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Not connected</AlertTitle>
        <AlertDescription>
          Please connect wallet to set message
        </AlertDescription>
      </Alert>
    );
  }

  const onSubmit = (data: formSchemaType) => {
    mutate(data.message);
  };
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input your new message"
                  defaultValue={""}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can type any message you want
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Set Message</Button>
        </div>
      </form>
    </Form>
  );
};

export default HelloWorldStateForm;
