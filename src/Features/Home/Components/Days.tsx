import { CgMoreVerticalAlt } from "react-icons/cg";
import useGetDays from "../hooks/useGetDays";
import Tasks from "./Tasks";

const Days = () => {
  const { Days } = useGetDays();
  return (
    <>
      <div className="flex justify-between overflow-y-scroll h-[50vh]">
        {Days?.data?.data?.map((el: any, index: number) => (
          <div key={index} className="flex flex-col">
            <div className="flex w-full gap-10 justify-between items-center group">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl font-semibold">{el || el.dayName}</h1>
                <p className="text-sm text-[grey]">July 26, 2025</p>
              </div>
              <div className="hidden group-hover:block cursor-pointer">
                <CgMoreVerticalAlt size={25} />
              </div>
            </div>
            <Tasks day_id={Number(Days?.data?.ids[index])} />
          </div>
        ))}
      </div>
      {/* <hr className="h-[2px]  border-none bg-gray-300 mt-4 rounded-full" /> */}
    </>
  );
};

export default Days;
