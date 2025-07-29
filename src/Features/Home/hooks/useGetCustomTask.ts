import { useQuery } from "@tanstack/react-query";
import { customTaskService } from "../../../Api/CustomTask/customTaskService";

interface CustomTasksData {
  data: {
    Title: string;
  }[];
  message: string;
  statusbar: number;
}

const useGetCustomTask = () => {
  const { data: CustomTasks, refetch } = useQuery<CustomTasksData>({
    queryKey: ["getCustomTask"],
    queryFn: customTaskService.getData,
  });

  return { CustomTasks, refetch };
};

export default useGetCustomTask;
