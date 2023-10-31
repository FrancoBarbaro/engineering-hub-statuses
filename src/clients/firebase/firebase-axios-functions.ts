import axios from "axios";

type FailedFirebaseResult = {
  success: false;
  error: string;
};

type SuccessFirebaseResult<T> = {
  success: true;
  data: T;
};

type FirebaseResult<T> = SuccessFirebaseResult<T> | FailedFirebaseResult;

const FIREBASE_URL = "https://engineering-hub-api-default-rtdb.firebaseio.com";

/**
 * Client description
 */
const firebaseAxiosClient = axios.create({
  baseURL: FIREBASE_URL,
  responseType: "json",
});

/**
 * Fetcher description
 */
export const firebaseApiFetcher = async <T = unknown>(
  url: string
): Promise<FirebaseResult<T>> => {
  return firebaseAxiosClient
    .get(`${url}.json`)
    .then(
      (res) => ({ success: true, data: res.data } as SuccessFirebaseResult<T>)
    )
    .catch(
      (error: Error) =>
        ({ success: false, error: error.message } as FailedFirebaseResult)
    );
};

/**
 * Patcher description
 */
export const firebaseApiPatcher = async <T = unknown>(
  url: string,
  key: string,
  newValue: unknown
): Promise<FirebaseResult<T>> => {
  return firebaseAxiosClient
    .patch(`${url}.json`, { [key]: newValue })
    .then(
      (res) => ({ success: true, data: res.data } as SuccessFirebaseResult<T>)
    )
    .catch(
      (error: Error) =>
        ({ success: false, error: error.message } as FailedFirebaseResult)
    );
};
