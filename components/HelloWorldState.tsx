"use client";
import useHelloWorldState from "@/hooks/useHelloWorldState";
import React from "react";

type Props = {};

const HelloWorldState: React.FC<Props> = ({}) => {
  const { data, isLoading } = useHelloWorldState();

  return (
    <div>
      <h1>Hello World State</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HelloWorldState;
