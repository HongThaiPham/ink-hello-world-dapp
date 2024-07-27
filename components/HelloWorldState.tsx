"use client";
import useHelloWorldState from "@/hooks/useHelloWorldState";
import { Loader2 } from "lucide-react";
import React from "react";

type Props = {};

const HelloWorldState: React.FC<Props> = ({}) => {
  const { data, isLoading } = useHelloWorldState();

  return (
    <div className="border p-5 rounded-md shadow-md">
      <h1>Hello World State</h1>
      {isLoading ? (
        <Loader2 className="animate-spin w-6 h-6" />
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default HelloWorldState;
