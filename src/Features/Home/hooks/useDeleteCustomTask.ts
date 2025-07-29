import { useMutation } from "@tanstack/react-query";
import { customTaskService } from "../../../Api/CustomTask/customTaskService";
import useGetCustomTask from "./useGetCustomTask";

const useDeleteCustomTask = () => {
  const { refetch } = useGetCustomTask();
  const { mutate } = useMutation({
    mutationKey: ["DeleteCustomTask"],
    mutationFn: customTaskService.DeleteData,
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteCustomTask = (customTask_id: number) => {
    mutate(customTask_id);
  };

  return { handleDeleteCustomTask };
};

export default useDeleteCustomTask;
