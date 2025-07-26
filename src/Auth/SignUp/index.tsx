import { FaGithub, FaGoogle } from "react-icons/fa";
import useSignUp from "../../Hooks/useSignUp";

const SignUp = () => {
  const { handleCreateAccount, handleSubmit, register } = useSignUp();
  return (
    <>
      <div className="flex gap-5">
        <img src="/image.png" className="h-[100vh]" alt="SignUpImage.png" />
        <div className="flex flex-col items-center justify-center w-full my-20">
          <h1 className="text-4xl font-bold">Welcome to Week_Todo</h1>
          <div className="flex flex-col items-center justify-center my-10">
            <form
              onSubmit={handleSubmit(handleCreateAccount)}
              className="grid grid-cols-2 gap-7 w-full "
            >
              <p className="flex flex-col gap-2 col-span-2">
                <label htmlFor="userName" className="font-bold">
                  userName
                </label>
                <input
                  type="text"
                  id="userName"
                  className="w-[40pc] bg-[#dddddd] px-2 py-4 rounded-md"
                  placeholder="userName"
                  {...register("userName", { required: true })}
                />
              </p>

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

              <p className="flex justify-center bg-green-400 col-span-2 mx-40 py-3 rounded-lg cursor-pointer hover:bg-green-500 transition-all duration-300 text-white font-bold">
                <button className="cursor-pointer">Create Account</button>
              </p>
            </form>

            <div className="flex flex-col gap-4">
              <p className="my-4">
                Already have an account?{" "}
                <span className="cursor-pointer text-blue-400 underline">
                  Log in
                </span>
              </p>
              <h1 className="text-xl font-bold text-center">OR</h1>
            </div>

            <div className="flex gap-3 my-5">
              <button className="border-2 rounded-lg border-gray-200 hover:bg-gray-200 cursor-pointer transition-all duration-200 w-72 py-4">
                <p className="flex gap-5 justify-center items-center">
                  <FaGoogle size={30} />
                  Sign up with Google
                </p>
              </button>
              <button className="border-2 rounded-lg border-gray-200 hover:bg-gray-200 cursor-pointer transition-all duration-200 w-72 py-4">
                <p className="flex gap-5 justify-center items-center">
                  <FaGithub size={30} />
                  Sign up with Github
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
