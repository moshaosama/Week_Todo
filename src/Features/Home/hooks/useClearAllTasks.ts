import { useMutation } from "@tanstack/react-query";
import { taskService } from "../../../Api/Tasks/taskService";

const useClearAllTasks = () => {
  const { mutate } = useMutation({
    mutationKey: ["ClearTasks"],
    mutationFn: taskService.ClearAllTasksById,
  });

  const handleClearAllTasks = (day_id: number) => {
    mutate(day_id);
  };

  return { handleClearAllTasks };
};

export default useClearAllTasks;
