import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [res, setRes] = useState<
    AxiosResponse<any, any> | never[] | undefined
  >();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await axios.get(url, {
          cancelToken: ourRequest.token,
        });
        const resData = response ? response : Object;

        setRes(resData);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error.message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
        console.log(error);
      }
    }
    fetchData();

    return () => {
      ourRequest.cancel("Operation canceled by the user!");
    };
  }, [url]);

  return { res, isLoading, isError };
};

export default useFetch;
