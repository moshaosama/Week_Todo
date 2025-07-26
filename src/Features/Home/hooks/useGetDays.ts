import { useQuery } from "@tanstack/react-query";
import { dayService } from "../../../Api/Days/DaysService";
import useGetUser from "../../../Hooks/useGetUser";

interface dataGetDays {
  data: {
    data: string[];
    ids: string[];
  };

  message: string;
  statusbar: string;
}

const useGetDays = () => {
  const { user } = useGetUser();

  const { data: Days } = useQuery<dataGetDays>({
    queryKey: ["getDay"],
    queryFn: () => dayService.getData(user.data[0]?.id),
  });

  return { Days };
};

export default useGetDays;
