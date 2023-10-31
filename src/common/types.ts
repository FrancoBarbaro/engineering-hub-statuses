export type BasicInfo = {
  name: string;
  hyphenatedName: string;
  photo: string;
  bio: string;
  status: string;
};

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
