import useGetDays from "../hooks/useGetDays";

const Days = () => {
  const { Days } = useGetDays();

  return (
    <>
      <div className="flex justify-between items-center">
        {Days?.data?.map((el, index: number) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-semibold">{el}</h1>
            <p className="text-sm text-[grey]">July 26, 2025</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Days;
