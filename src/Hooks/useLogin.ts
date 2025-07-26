import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { authService } from "../Api/Auth/authService";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { register, handleSubmit } = useForm();
  const Naviagte = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["signup"],
    mutationFn: authService.Login,
    onSuccess: (data: any) => {
      window.localStorage.setItem("User", JSON.stringify(data));
      Naviagte("/");
    },
  });

  const handleLogin = (data: any) => {
    mutate({
      Email: data.Email,
      Password: data.Password,
    });
  };

  return { handleLogin, handleSubmit, register };
};

export default useLogin;
