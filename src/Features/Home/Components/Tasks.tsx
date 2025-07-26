import useCreateTask from "../hooks/useCreateTask";
import useGetTasks from "../hooks/useGetTasks";

const Tasks = ({ day_id }: { day_id: number }) => {
  const { Tasks } = useGetTasks(day_id);
  const { handleCreateTask, handleSubmit, register } = useCreateTask();
  return (
    <>
      {Tasks?.data?.map((el) => {
        return (
          <>
            <h1>{el}</h1>
          </>
        );
      })}

      <form>
        <input
          type="text"
          className="w-48 focus:outline-0 border-b-2 border-b-gray-600"
          {...register("task", { required: true })}
          onMouseLeave={handleSubmit((data) => handleCreateTask(data, day_id))}
        />
      </form>
    </>
  );
};

export default Tasks;
