import { FirebaseContext } from "@/context/firebase-context";
import { useContext, useState } from "react";

export const useChangeProfessorStatus = (initialStatus: string) => {
	const [updatedStatus, setUpdatedStatus] = useState(initialStatus);
  const { authToken } = useContext(FirebaseContext);

  const changeProfessorStatus = async (
    hyphenatedName: string,
    newStatus: string
  ) => {
    if (!authToken) {
      throw new Error("Request did not include the required credentials!");
    }

    // updatedStatus would not yet be updated at this point, so this is comparing it to the previous status
    if (newStatus === updatedStatus) {
      return;
    }

    const res = await fetch("/api/professors/change-status", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ hyphenatedName, newStatus }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();

    if (!data) {
      return;
    }

    setUpdatedStatus(data.updatedData.status);
  };

  return { changeProfessorStatus, updatedStatus };
};
