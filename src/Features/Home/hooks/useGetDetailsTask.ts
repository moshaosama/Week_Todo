import { useQuery } from "@tanstack/react-query";
import { taskService } from "../../../Api/Tasks/taskService";

const useGetDetailsTask = (task_id: number) => {
  const { data: DetailsTask } = useQuery({
    queryKey: ["getDetailsTask"],
    queryFn: () => taskService.GetDeatilsTask(task_id),
  });

  return { DetailsTask };
};

export default useGetDetailsTask;
