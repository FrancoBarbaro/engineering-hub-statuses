export type BasicInfoObject = {
  name: string;
  hyphenatedName: string;
  photo: string;
  bio: string;
  status: string;
};

export type BasicInfo = BasicInfoObject[];

type BaseBasicInfoReturnType = {
  error: boolean;
};

type SuccessBasicInfoReturnType = BaseBasicInfoReturnType & {
  error: false;
  data: BasicInfo;
};

type FailedBasicInfoReturnType = BaseBasicInfoReturnType & {
  error: true;
  message: string;
};

export type BasicInfoReturnType =
  | SuccessBasicInfoReturnType
  | FailedBasicInfoReturnType;

// when we have all our data, make officeHours and callendly required types
export type ProfessorInfo = {
  name: string;
  photo: string;
  bio: string;
  status: string;
  email: string;
  officeLocation: string;
  officePicture: string;
  officeHours?: string;
  callendly?: string;
};

type BaseProfessorInfoReturnType = {
  error: boolean;
};

type SuccessProfessorInfoReturnType = BaseProfessorInfoReturnType & {
  error: false;
  data: ProfessorInfo;
};

type FailedProfessorInfoReturnType = BaseProfessorInfoReturnType & {
  error: true;
  message: string;
};

export type ProfessorInfoReturnType =
  | SuccessProfessorInfoReturnType
  | FailedProfessorInfoReturnType;

export type UpdatedData = {
  status: string;
};

type BaseUpdatedDataReturnType = {
  error: boolean;
};

type SuccessUpdatedDataReturnType = BaseUpdatedDataReturnType & {
  error: false;
  data: UpdatedData;
};

type FailedUpdatedDataReturnType = BaseUpdatedDataReturnType & {
  error: true;
  message: string;
};

export type UpdatedDataReturnType =
  | SuccessUpdatedDataReturnType
  | FailedUpdatedDataReturnType;
