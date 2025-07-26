import { FaGoogle } from "react-icons/fa";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const { handleLogin, handleSubmit, register } = useLogin();
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col  justify-center w-[57pc] items-center">
          <div className="flex flex-col ">
            <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
            <p className="text-gray-400 text-xl">
              Welcome back! Please enter your details.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="grid grid-cols-2 gap-7 w-full "
            >
              <p className="flex flex-col gap-2 col-span-2">
                <label htmlFor="Email" className="font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  className="w-[40pc] bg-[#dddddd] px-2 py-4 rounded-md"
                  placeholder="Email"
                  {...register("Email", { required: true })}
                />
              </p>
              <p className="flex flex-col gap-2 col-span-2">
                <label htmlFor="Password" className="font-bold">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  className="w-[40pc] bg-[#dddddd] px-2 py-4 rounded-md"
                  placeholder="Password"
                  {...register("Password", { required: true })}
                />
              </p>

              <p className="flex justify-center bg-[#EA454C] col-span-2 mx-40 py-3 rounded-lg cursor-pointer hover:bg-[#6d3436] transition-all duration-300 text-white font-bold">
                <button className="cursor-pointer">Sign in</button>
              </p>
            </form>

            <button className="border-2 my-4 rounded-lg border-gray-200 hover:bg-gray-200 cursor-pointer transition-all duration-200 w-80 py-3">
              <p className="flex gap-5 justify-center items-center">
                <FaGoogle size={30} />
                Sign up with Google
              </p>
            </button>

            <p>
              Don’t have an account?{" "}
              <span className="text-[#EA454C] font-bold cursor-pointer underline">
                Sign up fo free!
              </span>
            </p>
          </div>
        </div>
        <div>
          <img src="/Right Side.png" alt="Login.png" className="h-[100vh]" />
        </div>
      </div>
    </>
  );
};

export default Login;
