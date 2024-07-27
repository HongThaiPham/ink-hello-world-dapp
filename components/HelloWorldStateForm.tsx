"use client";
import React from "react";
import { Button } from "./ui/button";
import useSetHelloWorldState from "@/hooks/useSetHelloWorldState";

type Props = {};

const HelloWorldStateForm: React.FC<Props> = ({}) => {
  const { mutate } = useSetHelloWorldState();
  const handleClick = () => {
    mutate(`Hello, This is a message from the client. Time is ${new Date()}`);
  };
  return <Button onClick={handleClick}>Set message</Button>;
};

export default HelloWorldStateForm;
