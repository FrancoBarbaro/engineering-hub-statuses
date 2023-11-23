import { firebaseApiPatcher } from "@/clients/firebase/firebase-axios-functions";
import type { UpdatedData, UpdatedDataReturnType } from "@/common/types";
import { getBasicInfo } from "@/server/endpoints/get-basic-info";

export const patchProfessorAttribute = async (
  hyphenatedName: string,
	attribute: string,
  newValue: string,
  authToken: string
): Promise<UpdatedDataReturnType> => {
  const getBasicInfoResponse = await getBasicInfo();
  if (getBasicInfoResponse.error)
    return {
      error: true,
      message:
        "An error occured while fetching basic info before changing professor's status!",
    };
  const index = getBasicInfoResponse.data.findIndex(
    (obj) => obj.hyphenatedName === hyphenatedName
  );

  const patchBasicInfoResponse = await firebaseApiPatcher<UpdatedData>(
    `professors/basicInfo/${index}`,
    attribute,
    newValue,
    authToken
  );
  if (!patchBasicInfoResponse.success)
    return {
      error: true,
      message: "An error occured while changing professor's status!",
    };

  const patchProfessorInfoResponse = await firebaseApiPatcher<UpdatedData>(
    `professors/allInfo/${hyphenatedName}`,
    attribute,
    newValue,
    authToken
  );
  if (!patchProfessorInfoResponse.success)
    return {
      error: true,
      message: "An error occured while changing professor's status!",
    };
  return { error: false, data: patchProfessorInfoResponse.data };
};
