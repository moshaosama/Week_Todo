const Inputs = () => {
  const arr = Array(14).fill(0);
  console.log(arr);

  return (
    <>
      {arr.map((_) => (
        <form className="flex flex-col">
          <input
            type="text"
            className="w-48 focus:outline-0 border-b-2 border-b-gray-600"
          />
        </form>
      ))}
    </>
  );
};

export default Inputs;
