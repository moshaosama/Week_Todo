import Inputs from "../../../Components/inputs";
import useGetDays from "../hooks/useGetDays";

const Days = () => {
  const { Days } = useGetDays();

  return (
    <>
      <div className="flex justify-between items-center">
        {Days?.data?.map((el: any, index: number) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-3xl font-semibold">{el || el.dayName}</h1>
              <p className="text-sm text-[grey]">July 26, 2025</p>
            </div>
            <div className="flex flex-col">
              <Inputs />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Days;
