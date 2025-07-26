import { useQuery } from "@tanstack/react-query";
import useGetUser from "../../../Hooks/useGetUser";
import { taskService } from "../../../Api/Tasks/taskService";

interface dataGetTasks {
  data: string[];
  message: string;
  statusbar: string;
}

const useGetTasks = (day_id: number) => {
  const { user } = useGetUser();
  const userId = user?.data?.[0]?.id;

  const {
    data: Tasks,
    isLoading,
    error,
  } = useQuery<dataGetTasks>({
    queryKey: ["getTask", userId, day_id],
    queryFn: () =>
      taskService.getData({
        day_id,
        user_id: userId,
      }),
    enabled: !!userId,
  });

  return { Tasks, isLoading, error };
};

export default useGetTasks;
