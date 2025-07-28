import { createContext, useContext, useState, type ReactNode } from "react";

interface OpenEditTasksContextData {
  isOpenEditTask: boolean;
  selectedIndex: number | null;
  selectedDayid: number | null;
  handleTriggerEditTasks: (index?: number, day_id?: number) => void;
}

interface OpenEditTasksProviderProps {
  children: ReactNode;
}

const OpenEditTasksContext = createContext<OpenEditTasksContextData | null>(
  null
);

const OpenEditTasksProvider = ({ children }: OpenEditTasksProviderProps) => {
  const [isOpenEditTask, setIsOpenEditTask] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedDayid, setSelectedDayid] = useState<number | null>(null);

  const handleTriggerEditTasks = (index?: number, day_id?: number) => {
    setIsOpenEditTask(!isOpenEditTask);
    setSelectedIndex(index ?? null);
    setSelectedDayid(day_id ?? null);
  };

  return (
    <OpenEditTasksContext.Provider
      value={{
        isOpenEditTask,
        selectedIndex,
        handleTriggerEditTasks,
        selectedDayid,
      }}
    >
      {children}
    </OpenEditTasksContext.Provider>
  );
};

export default OpenEditTasksProvider;

export const useOpenEditTasksContext = () => {
  const context = useContext(OpenEditTasksContext);
  if (!context) {
    throw new Error(
      "useOpenEditTasksContext must be used within an OpenEditTasksProvider"
    );
  }
  return context;
};
