import { firebaseApiFetcher } from "@/clients/firebase/firebase-axios-functions";
import type { ProfessorInfo, ProfessorInfoReturnType } from "@/common/types";

export const getProfessorInfoFromName = async (
  hyphenatedName: string
): Promise<ProfessorInfoReturnType> => {
  const firebaseResponse = await firebaseApiFetcher<ProfessorInfo>(
    `professors/allInfo/${hyphenatedName}`
  );
  if (!firebaseResponse.success)
    return {
      error: true,
      message: "An error occured retrieving professor info!",
    };
  return { error: false, data: firebaseResponse.data };
};
