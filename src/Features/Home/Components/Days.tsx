import { CgMoreVerticalAlt } from "react-icons/cg";
import useGetDays from "../hooks/useGetDays";
import Tasks from "./Tasks";
import CustomTask from "./CustomTask";
import { useOpenSidebarDaysContext } from "../Context/OpenSidebarDays";
import useClearAllTasks from "../hooks/useClearAllTasks";

const Days = () => {
  const { Days } = useGetDays();
  const { isOpenSidebar, handleTriggerOpenSidebar } =
    useOpenSidebarDaysContext();
  const { handleClearAllTasks } = useClearAllTasks();
  return (
    <>
      <div className="flex justify-between overflow-y-scroll  h-[50vh]">
        {Days?.data?.data?.map((el: any, index: number) => (
          <div key={index} className="flex flex-col">
            <div className="flex  w-full gap-10 justify-between items-center group">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl font-semibold">{el || el.dayName}</h1>
                <p className="text-sm text-[grey]">July 26, 2025</p>
              </div>
              <div
                onClick={() => handleTriggerOpenSidebar(index)}
                className="hidden group-hover:block  cursor-pointer"
              >
                <CgMoreVerticalAlt size={25} />
              </div>
            </div>
            <div>
              <Tasks day_id={Number(Days?.data?.ids[index])} />
            </div>

            {isOpenSidebar === index && (
              <div className="absolute top-10 left-20 p-2 rounded-xl z-50 bg-[#ebebeb] shadow-xl shadow-[gray] w-36">
                <div
                  onClick={() =>
                    handleClearAllTasks(Number(Days?.data?.ids[index]))
                  }
                  className="hover:bg-white cursor-pointer p-2 rounded-xl"
                >
                  <h1>Clear All</h1>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <hr className="h-[2px]  border-none bg-gray-300 mt-4 rounded-full" />
      <CustomTask />
    </>
  );
};

export default Days;
