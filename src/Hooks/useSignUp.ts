import { useMutation } from "@tanstack/react-query";
import { authService } from "../Api/Auth/authService";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const { register, handleSubmit } = useForm();
  const Naviagte = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["signup"],
    mutationFn: authService.SignUp,
    onSuccess: () => {
      Naviagte("/login");
    },
  });

  const handleCreateAccount = (data: any) => {
    mutate({
      userName: data.userName,
      Email: data.Email,
      Password: data.Password,
    });
  };

  return { handleCreateAccount, handleSubmit, register };
};

export default useSignUp;
