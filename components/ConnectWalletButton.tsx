"use client";
import { useInkathon } from "@scio-labs/use-inkathon";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUser, Loader2, UserCircle } from "lucide-react";
import { toast } from "sonner";
import DisplayAddress from "./DisplayAddress";

type Props = {};

const ConnectWalletButton: React.FC<Props> = ({}) => {
  const {
    isConnected,
    connect,
    accounts,
    isConnecting,
    disconnect,
    activeAccount,
  } = useInkathon();

  const handleConnectWallet = () => {
    if (connect) connect();
  };

  const handleDisconnectWallet = () => {
    if (disconnect) disconnect();
  };

  const handleCopyAddress = () => {
    if (accounts) {
      navigator.clipboard.writeText(accounts[0].address);
      toast.success("Address copied to clipboard");
    }
  };

  if (isConnecting) {
    return (
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Connecting ...
      </Button>
    );
  }

  if (!isConnected) {
    return <Button onClick={handleConnectWallet}>Connect wallet</Button>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant={"secondary"}>
          <CircleUser className="mr-2" />
          <DisplayAddress address={activeAccount?.address} paddingLength={4} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleCopyAddress}
          className="cursor-pointer"
        >
          Copy address
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleDisconnectWallet}
          className="cursor-pointer"
        >
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ConnectWalletButton;
