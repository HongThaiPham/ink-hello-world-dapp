import {
  contractQuery,
  decodeOutput,
  useInkathon,
  useRegisteredContract,
} from "@scio-labs/use-inkathon";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const useHelloWorldState = () => {
  const { api } = useInkathon();
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID as string;

  const { contract } = useRegisteredContract(contractId);
  return useQuery({
    queryKey: ["get-hello-world-state"],
    queryFn: async () => {
      if (!contract || !api) return;
      const result = await contractQuery(api, "", contract, "get");
      const { output, isError, decodedOutput } = decodeOutput(
        result,
        contract,
        "get"
      );
      if (isError) {
        toast.error("Error fetching contract state");
        return;
      }
      return output;
    },
    enabled: !!contract && !!api,
  });
};

export default useHelloWorldState;
