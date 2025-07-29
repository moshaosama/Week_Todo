import type { ReactElement } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import useCreateCustomTask from "../Features/Home/hooks/useCreateCustomTask";

interface dataType {
  icon: ReactElement;
  onClick: () => void;
}

const Icons = () => {
  const { handleCreateCustomTask } = useCreateCustomTask();
  const DefaultIcons: dataType[] = [
    {
      icon: <IoHomeOutline size={30} />,
      onClick: () => {},
    },

    {
      icon: <SlCalender size={30} />,
      onClick: () => {},
    },

    {
      icon: <GrPowerReset size={30} />,
      onClick: () => {},
    },

    {
      icon: <IoIosAddCircleOutline size={30} />,
      onClick: handleCreateCustomTask,
    },
  ];

  return { DefaultIcons };
};

export default Icons;
