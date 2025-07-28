import { useQuery } from "@tanstack/react-query";
import { taskService } from "../../../Api/Tasks/taskService";

const useGetTaskByid = (day_id: number, task_id: number) => {
  const { data: taskByid } = useQuery({
    queryKey: ["gettaskById"],
    queryFn: () =>
      taskService.getTaskById({
        day_id,
        task_id,
      }),
  });

  return { taskByid };
};

export default useGetTaskByid;
