import { useMutation } from "@tanstack/react-query";
import { customTaskService } from "../../../Api/CustomTask/customTaskService";
import useGetCustomTask from "./useGetCustomTask";

const useCreateCustomTask = () => {
  const { refetch } = useGetCustomTask();
  const { mutate } = useMutation({
    mutationKey: ["createCustomTask"],
    mutationFn: customTaskService.CreateData,
    onSuccess: () => {
      refetch();
    },
  });

  const handleCreateCustomTask = () => {
    mutate();
  };

  return { handleCreateCustomTask };
};

export default useCreateCustomTask;
