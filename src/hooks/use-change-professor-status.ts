export const useChangeProfessorStatus = async (
  hyphenatedName: string,
  newStatus: string
) => {
  const res = await fetch("/api/professors/change-status", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ hyphenatedName, newStatus }),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
};
