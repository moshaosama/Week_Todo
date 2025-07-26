import { useQuery } from "@tanstack/react-query";
import { dayService } from "../../../Api/Days/DaysService";

interface dataGetDays {
  data: string[] | { dayName: string }[];
  message: string;
  statusbar: string;
}

const useGetDays = () => {
  const { data: Days } = useQuery<dataGetDays>({
    queryKey: ["getDay"],
    queryFn: () => dayService.getData(14),
  });

  return { Days };
};

export default useGetDays;
