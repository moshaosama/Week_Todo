import Days from "../Features/Home/Components/Days";
import OpenEditTasksProvider from "../Features/Home/Context/openEditTasks";
import OpenSidebarDaysProvider from "../Features/Home/Context/OpenSidebarDays";

const Home = () => {
  return (
    <div className="w-[105pc]">
      <OpenEditTasksProvider>
        <OpenSidebarDaysProvider>
          <Days />
        </OpenSidebarDaysProvider>
      </OpenEditTasksProvider>
    </div>
  );
};

export default Home;
