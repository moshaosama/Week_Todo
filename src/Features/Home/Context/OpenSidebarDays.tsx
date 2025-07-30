import { createContext, useContext, useState, type ReactNode } from "react";

interface OpenSidebarDaysContextData {
  isOpenSidebar: number;
  handleTriggerOpenSidebar: (id: number) => void;
}

interface OpenSidebarDaysProviderProps {
  children: ReactNode;
}

const OpenSidebarDaysContext = createContext<OpenSidebarDaysContextData | null>(
  null
);

const OpenSidebarDaysProvider = ({
  children,
}: OpenSidebarDaysProviderProps) => {
  const [isOpenSidebar, setIsSidebar] = useState<number>(-1);

  const handleTriggerOpenSidebar = (id: number) => {
    setIsSidebar(id);
  };
  return (
    <>
      <OpenSidebarDaysContext
        value={{ isOpenSidebar, handleTriggerOpenSidebar }}
      >
        {children}
      </OpenSidebarDaysContext>
    </>
  );
};

export default OpenSidebarDaysProvider;

export const useOpenSidebarDaysContext = () => {
  const context = useContext(OpenSidebarDaysContext);
  if (!context) {
    throw new Error(
      "useOpenEditTasksContext must be used within an OpenEditTasksProvider"
    );
  }
  return context;
};
