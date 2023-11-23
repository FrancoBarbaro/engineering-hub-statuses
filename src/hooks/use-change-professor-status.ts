import { FirebaseContext } from "@/context/firebase-context";
import { useContext, useState } from "react";

export const useChangeProfessorAttributes = (
  initialBio: string,
  initialStatus: string,
  initialOfficeHours: string | undefined
) => {
  const [bio, setBio] = useState(initialBio);
  const [status, setStatus] = useState(initialStatus);
  const [officeHours, setOfficeHours] = useState(initialOfficeHours);
  const { authToken } = useContext(FirebaseContext);

  const changeProfessorAttribute = async (
    hyphenatedName: string,
    attribute: string,
    newValue: string
  ) => {
    if (!authToken) {
      throw new Error("Request did not include the required credentials!");
    }

    const guardConditions = [
      attribute === "bio" && newValue === bio,
      attribute === "status" && newValue === status,
      attribute === "officeHours" && newValue === officeHours,
    ];

    // makes sure that the attribute is not being changed to the same value
    if (guardConditions.some(Boolean)) {
      return;
    }

    const res = await fetch("/api/professors/change-status", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ hyphenatedName, attribute, newValue }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();

    if (!data) {
      return;
    }

    if (attribute === "bio") {
      setBio(data.updatedData.bio);
    } else if (attribute === "status") {
      setStatus(data.updatedData.status);
    } else if (attribute === "officeHours") {
      setOfficeHours(data.updatedData.officeHours);
    }
  };

  return {
    bio,
    status,
    officeHours,
    changeProfessorAttribute,
  };
};
