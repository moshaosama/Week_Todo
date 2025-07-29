import { CgMoreVerticalAlt } from "react-icons/cg";
import useCreateTask from "../hooks/useCreateTask";
import useGetTasks from "../hooks/useGetTasks";
import EditTask from "./EditTask";
import { useOpenEditTasksContext } from "../Context/openEditTasks";


const Tasks = ({ day_id }: { day_id: number }) => {
  const { Tasks } = useGetTasks(day_id);
  const { handleCreateTask, handleSubmit, register } = useCreateTask();
  const {
    handleTriggerEditTasks,
    isOpenEditTask,
    selectedIndex,
    selectedDayid,
  } = useOpenEditTasksContext();

  return (
    <>
      {Tasks?.data?.map((el, index) => {
        return (
          <div key={index}>
            <div className="flex justify-between items-center group">
              <div className="flex w-40 items-center gap-2">
                <input type="radio" />
                <label className="truncate">{el}</label>
              </div>
              <div
                onClick={() => handleTriggerEditTasks(index, day_id)}
                className="hidden group-hover:block cursor-pointer"
              >
                <CgMoreVerticalAlt />
              </div>
            </div>
            {isOpenEditTask &&
              selectedIndex === index &&
              selectedDayid === day_id && (
                <EditTask day_id={day_id} task_id={49} index_num={index} />
              )}
          </div>
        );
      })}
      <form>
        <input
          type="text"
          className="w-48 focus:outline-0 border-b-2 border-b-[#cfcfcf]"
          {...register("task", { required: true })}
          onMouseLeave={handleSubmit((data) => handleCreateTask(data, day_id))}
        />
      </form>
    </>
  );
};

export default Tasks;
