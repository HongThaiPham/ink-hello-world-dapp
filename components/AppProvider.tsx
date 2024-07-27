"use client";
import React, { PropsWithChildren } from "react";
import {
  contracts,
  SubstrateDeployment,
  UseInkathonProvider,
} from "@scio-labs/use-inkathon";

import metadata from "@/artifacts/hello_world.json";
import { Toaster } from "./ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  async function getContract(): Promise<SubstrateDeployment[]> {
    return [
      {
        contractId: process.env.NEXT_PUBLIC_CONTRACT_ID as string,
        networkId: contracts.network,
        abi: metadata,
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
      },
    ];
  }
  return (
    <QueryClientProvider client={queryClient}>
      <UseInkathonProvider
        appName="Hello World, ink!"
        connectOnInit={true}
        defaultChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN as string}
        deployments={getContract()}
      >
        {children}
        <Toaster />
      </UseInkathonProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
