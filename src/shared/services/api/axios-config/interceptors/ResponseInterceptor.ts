import { AxiosResponse } from "axios";

export const responseInterceptor = (response: AxiosResponse) => {
  //Todo:  if success -> Treatment data default
  return response;
};
