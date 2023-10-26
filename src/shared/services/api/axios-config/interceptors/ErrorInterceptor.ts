import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Connection Failure!"));
  }

  if (error.response?.status === 401) {
    // To auth treatment
  }

  return Promise.reject(error);
};
