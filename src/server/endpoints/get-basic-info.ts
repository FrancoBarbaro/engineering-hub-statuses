import { firebaseApiFetcher } from "@/clients/firebase/firebase-fetcher";
import type { ProfessorInfo, ProfessorInfoReturnType } from "@/common/types";

export const getBasicInfo = async (): Promise<ProfessorInfoReturnType> => {
  const firebaseResponse = await firebaseApiFetcher<ProfessorInfo>(
    "professors/basicInfo"
  );
  if (!firebaseResponse.success)
    return {
      error: true,
      message: "An error occured retrieving planet info!",
    };
  return { error: false, data: firebaseResponse.data };
};
