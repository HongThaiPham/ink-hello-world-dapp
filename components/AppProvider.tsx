"use client";
import React, { PropsWithChildren } from "react";
import {
  contracts,
  SubstrateDeployment,
  UseInkathonProvider,
  development,
} from "@scio-labs/use-inkathon";

import metadata from "@/artifacts/hello_world.json";
import { Toaster } from "./ui/sonner";

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  async function getContract(): Promise<SubstrateDeployment[]> {
    return [
      {
        contractId: "hello_world",
        networkId: contracts.network,
        abi: metadata,
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
      },
    ];
  }
  return (
    <UseInkathonProvider
      appName="Hello World, ink!"
      connectOnInit={true}
      defaultChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN as string}
      deployments={getContract()}
    >
      {children}
      <Toaster />
    </UseInkathonProvider>
  );
};

export default AppProvider;
