import { HiMiniEllipsisVertical } from "react-icons/hi2";
import useGetCustomTask from "../hooks/useGetCustomTask";
import { useState } from "react";
import useDeleteCustomTask from "../hooks/useDeleteCustomTask";

const CustomTask = () => {
  const { CustomTasks } = useGetCustomTask();
  const { handleDeleteCustomTask } = useDeleteCustomTask();
  const [isOpenSidebar, setIsOpenSidebar] = useState<null | number>(null);

  const handleTriggerOpenSidebar = (id: number) => {
    if (isOpenSidebar === null) {
      setIsOpenSidebar(id);
    } else {
      setIsOpenSidebar(null);
    }
  };

  return (
    <div className="grid grid-cols-7 gap-4">
      {CustomTasks?.data?.map((el, index) => (
        <div key={index}>
          <div className="flex justify-between items-center group relative">
            <div key={index}>
              <input
                type="text"
                defaultValue={el.Title}
                className="text-2xl font-bold p-2 w-full"
              />
            </div>
            <div
              onClick={() => handleTriggerOpenSidebar(el.id)}
              className="hidden group-hover:block cursor-pointer"
            >
              <HiMiniEllipsisVertical size={25} />
            </div>

            {isOpenSidebar === el.id && (
              <div
                onClick={() => handleDeleteCustomTask(el.id)}
                className="absolute top-10 left-40 p-2 rounded-xl bg-[#ebebeb] shadow-xl shadow-[gray] w-36"
              >
                <div className="hover:bg-white cursor-pointer p-2 rounded-xl">
                  <h1>Delete</h1>
                </div>
              </div>
            )}
          </div>
          <form>
            <input
              type="text"
              className="w-48 focus:outline-0 border-b-2 border-b-[#cfcfcf]"
            />
          </form>
        </div>
      ))}
    </div>
  );
};

export default CustomTask;
