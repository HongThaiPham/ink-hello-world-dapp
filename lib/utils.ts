import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateHash = (
  hash: string | undefined,
  paddingLength = 6
): string | undefined => {
  if (!hash?.length) return undefined;
  if (hash.length <= paddingLength * 2 + 1) return hash;
  return hash.replace(
    hash.substring(paddingLength, hash.length - paddingLength),
    "…"
  );
};
