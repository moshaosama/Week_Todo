import Days from "../Features/Home/Components/Days";
import OpenEditTasksProvider from "../Features/Home/Context/openEditTasks";

const Home = () => {
  return (
    <div className="w-[105pc]">
      <OpenEditTasksProvider>
        <Days />
      </OpenEditTasksProvider>
    </div>
  );
};

export default Home;
