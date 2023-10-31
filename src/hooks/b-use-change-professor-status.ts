import { UpdatedData } from "@/common/types";
import useSWR from "swr";

type DataType = { updatedData: UpdatedData };

const fetcher = async (
  url: RequestInfo,
  hyphenatedName: string,
  newStatus: string
) => {
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ hyphenatedName, newStatus }),
  });

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data!");
  }

  return res.json();
};

// TODO: make this work later
export const useChangeProfessorStatus = (
  hyphenatedName: string,
  newStatus: string
) => {
  const { data } = useSWR<DataType>(
    [`/api/professors/change-status`, hyphenatedName, newStatus],
    fetcher,
    { errorRetryCount: 2 }
  );
  return { data: data?.updatedData };
};
