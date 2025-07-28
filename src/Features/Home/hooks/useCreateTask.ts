import { useMutation } from "@tanstack/react-query";
import { taskService } from "../../../Api/Tasks/taskService";
import useGetUser from "../../../Hooks/useGetUser";
import { useForm } from "react-hook-form";

const useCreateTask = () => {
  const { user } = useGetUser();
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation({
    mutationKey: ["createTask", user?.data?.[0]?.id],
    mutationFn: taskService.CreateData,
    onSuccess: () => {},
  });

  const handleCreateTask = (data: any, day_id: number) => {
    mutate({
      day_id,
      user_id: user?.data?.[0]?.id,
      task: data.task,
    });
  };

  return { register, handleSubmit, handleCreateTask };
};

export default useCreateTask;
