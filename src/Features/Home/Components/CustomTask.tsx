import useGetCustomTask from "../hooks/useGetCustomTask";

const CustomTask = () => {
  const { CustomTasks } = useGetCustomTask();
  console.log(CustomTasks);

  return (
    <div className="grid grid-cols-7 gap-4">
      {CustomTasks?.data?.map((el, index) => (
        <div key={index}>
          <div>
            <div key={index}>
              <input
                type="text"
                defaultValue={el.Title}
                className="text-2xl font-bold p-2 w-full"
              />
            </div>
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
