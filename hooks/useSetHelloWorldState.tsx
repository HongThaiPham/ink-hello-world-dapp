import {
  contractTx,
  useInkathon,
  useRegisteredContract,
} from "@scio-labs/use-inkathon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useSetHelloWorldState = () => {
  const queryClient = useQueryClient();
  const { api, activeAccount } = useInkathon();
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID as string;

  const { contract } = useRegisteredContract(contractId);
  return useMutation({
    mutationKey: ["set-hello-world-state"],
    mutationFn: async (message: string) => {
      if (!contract || !api || !activeAccount) return;
      return toast.promise(
        contractTx(api, activeAccount.address, contract, "set", {}, [message]),
        {
          loading: "Setting contract state...",
          success: async () => {
            await queryClient.invalidateQueries({
              queryKey: ["get-hello-world-state"],
            });
            return "Successfully set contract state";
          },
          error: "Error setting contract state",
        }
      );
    },
  });
};

export default useSetHelloWorldState;
