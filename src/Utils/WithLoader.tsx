import { useEffect, useState, type ComponentType } from "react";
import Loading from "../Components/Loading";
import { cn } from "./cn";

const WithLoader = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const handleTriggerISLoading = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      };
      handleTriggerISLoading();
    }, []);

    return (
      <>
        <div
          className={cn(
            isLoading ? "opacity-100" : "opacity-0 overflow-hidden hidden",
            "transition-all duration-1000"
          )}
        >
          <Loading />
        </div>

        <div
          className={cn(
            isLoading ? "opacity-0 hidden" : "opacity-100",
            "transition-all duration-1000"
          )}
        >
          <Component {...props} />
        </div>
      </>
    );
  };
};

export default WithLoader;
