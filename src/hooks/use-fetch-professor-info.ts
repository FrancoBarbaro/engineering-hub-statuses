import type { ProfessorInfo } from "@/common/types";
import useSWR from "swr";

type DataType = { info: ProfessorInfo };

const fetcher = async (url: RequestInfo) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data!");
  }

  return res.json();
};

export const useFetchProfessorInfo = (
  hyphenatedName: string | string[] | undefined
) => {
  const { data } = useSWR<DataType>(
    `/api/professors/${hyphenatedName}`,
    fetcher,
    { errorRetryCount: 2 }
  );
  return { data: data?.info };
};
