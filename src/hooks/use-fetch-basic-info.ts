import type { BasicInfo } from "@/common/types";
import useSWR from "swr";

type DataType = { info: BasicInfo };

const fetcher = async (url: RequestInfo) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data!");
  }

  return res.json();
};

export const useFetchBasicInfo = () => {
  const { data } = useSWR<DataType>(`/api/professors/basic-info`, fetcher, {
    errorRetryCount: 2,
  });
  return { data: data?.info };
};
