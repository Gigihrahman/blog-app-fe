"use client";
import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/stores/auth";
import type { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
interface Response extends User {
  accessToken: string;
}
const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: Pick<User, "email" | "password">) => {
      const { data } = await axiosInstance.post<Response>(
        "/auth/login",
        payload,
      );
      return data;
    },
    onSuccess: async (data) => {
      await signIn("credentials", { ...data, redirect: false });
      toast.success("Login Success");
      console.log(data);
      router.push("/");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data.message);
    },
  });
};

export default useLogin;
