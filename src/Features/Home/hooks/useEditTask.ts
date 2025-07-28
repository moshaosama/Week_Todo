import { useMutation } from "@tanstack/react-query";
import { taskService } from "../../../Api/Tasks/taskService";
import { useForm } from "react-hook-form";

const useEditTask = () => {
  const { mutate } = useMutation({
    mutationKey: ["editTask"],
    mutationFn: taskService.EditTask,
  });

  const { register, handleSubmit } = useForm();

  const handleEditTask = (
    data: any,
    params: { day_id: number; task_id: number; index_db: number }
  ) => {
    mutate({
      day_id: params.day_id,
      task_id: params.task_id,
      task: data?.task,
      index_db: params.index_db,
    });
  };

  return { handleEditTask, register, handleSubmit };
};

export default useEditTask;
