import { CgMoreVerticalAlt } from "react-icons/cg";
import { HiXMark } from "react-icons/hi2";
import { IoMdAddCircleOutline } from "react-icons/io";
import useGetTaskByid from "../hooks/useGetTaskByid";
import { useOpenEditTasksContext } from "../Context/openEditTasks";
import useEditTask from "../hooks/useEditTask";

const EditTask = ({
  day_id,
  task_id,
  index_num,
}: {
  day_id: number;
  task_id: number;
  index_num: number;
}) => {
  const { taskByid } = useGetTaskByid(day_id, task_id);
  const { handleTriggerEditTasks } = useOpenEditTasksContext();
  const { handleEditTask, handleSubmit, register } = useEditTask();
  return (
    <>
      <div className=" backdrop-blur-[1px] bg-black/5 p-20  absolute top-0 left-0 w-full h-[100vh]">
        <div className="bg-white h-[85vh] w-[109pc] p-5 rounded-xl  shadow-gray-500">
          <div className="flex justify-between mx-10 items-center">
            <div>
              <h1 className="text-3xl font-bold">Edit Task</h1>
            </div>
            <div className="flex items-center gap-5">
              <i className="hover:bg-[#c2c2c2] p-1 cursor-pointer rounded-xl">
                <CgMoreVerticalAlt size={30} />
              </i>
              <i
                onClick={() => handleTriggerEditTasks(index_num, day_id)}
                className="hover:bg-[#c2c2c2] cursor-pointer p-1 rounded-xl"
              >
                <HiXMark size={30} />
              </i>
            </div>
          </div>
          <hr className="h-[2px]  border-none bg-gray-300 mt-4 rounded-full" />
          <div className="m-10">
            <form
              onMouseLeave={handleSubmit((data) =>
                handleEditTask(data, {
                  day_id: day_id,
                  task_id: task_id,
                  index_db: index_num,
                })
              )}
              className="flex flex-col justify-center  gap-5"
            >
              <p className="flex  items-center gap-5">
                <input type="checkbox" className="p-4" />
                <input
                  className="text-5xl focus:outline-0 w-full"
                  type="text"
                  defaultValue={taskByid?.data?.[index_num]}
                  {...register("task")}
                />
              </p>

              <textarea
                defaultValue="Notes"
                className="text-[gray] text-xl focus:h-52"
              />
            </form>
          </div>
          <hr className="h-[2px] w-full border-none bg-gray-300  rounded-full" />

          <form action="" className="mt-5 mx-10">
            <p className="flex items-center gap-5">
              <label htmlFor="Add">
                <IoMdAddCircleOutline size={35} color="gray" />
              </label>
              <input
                type="text"
                id="Add"
                defaultValue="Add Subtask"
                className="w-full p-2 rounded-lg"
              />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTask;
