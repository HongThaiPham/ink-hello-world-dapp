"use client";
import { truncateHash } from "@/lib/utils";
import { encodeAddress } from "@polkadot/util-crypto";
import { useInkathon } from "@scio-labs/use-inkathon";
import React from "react";

type Props = {
  address: string | undefined;
  paddingLength?: number;
};

const DisplayAddress: React.FC<Props> = ({ address, paddingLength = 8 }) => {
  const { activeChain } = useInkathon();
  if (!address) return null;
  return (
    <span>
      {truncateHash(
        encodeAddress(address, activeChain?.ss58Prefix || 42),
        paddingLength
      )}
    </span>
  );
};

export default DisplayAddress;
