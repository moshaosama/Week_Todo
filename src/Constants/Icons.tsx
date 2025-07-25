import type { ReactElement } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

interface dataType {
  icon: ReactElement;
}

export const DefaultIcons: dataType[] = [
  {
    icon: <IoHomeOutline size={30} />,
  },

  {
    icon: <SlCalender size={30} />,
  },

  {
    icon: <GrPowerReset size={30} />,
  },

  {
    icon: <IoIosAddCircleOutline size={30} />,
  },

  {
    icon: <GrPowerReset size={30} />,
  },
];
