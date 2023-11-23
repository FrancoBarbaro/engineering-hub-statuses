import type { ProfessorInfo } from "@/common/types";
import useSWR, { mutate } from "swr";
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

	// TODO: shouldn't this be in use-change-professor-status.ts?
  // updates the data within the swr instance
  const changeSwrData = (data: DataType) => {
    mutate(`/api/professors/${hyphenatedName}`, data);
  };

  return { data: data?.info, changeSwrData };
};
