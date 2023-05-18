import { AxiosResponse } from "axios";

export type AxiosResponseType<T> = {
  data: T[];
//   status: number;
//   statusText: string;
//   headers: H;
//   config: C;
//   request: XMLHttpRequest;
};

export type UseFetchType<T> = {
  res: AxiosResponseType<T>;
  isLoading: boolean;
  isError: boolean;
};
