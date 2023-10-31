import { firebaseApiFetcher } from "@/clients/firebase/firebase-axios-functions";
import type { BasicInfo, BasicInfoReturnType } from "@/common/types";

export const getBasicInfo = async (): Promise<BasicInfoReturnType> => {
  const firebaseResponse = await firebaseApiFetcher<BasicInfo>(
    "professors/basicInfo"
  );
  if (!firebaseResponse.success)
    return {
      error: true,
      message: "An error occured retrieving basic info!",
    };
  return { error: false, data: firebaseResponse.data };
};
