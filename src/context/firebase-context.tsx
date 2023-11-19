import { auth } from "@/clients/firebase/firebase-app";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, type FC, type ReactNode } from "react";

type ContextType = {
  authToken: string | null;
  authedUserEmail: string | null;
};

type FirebaseContextProviderProps = {
  children: ReactNode;
};

const initialContextValue = {
  authToken: null,
  authedUserEmail: null,
};

export const FirebaseContext = createContext<ContextType>(initialContextValue);

export const FirebaseContextProvider: FC<FirebaseContextProviderProps> = ({
  children,
}) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [authedUserEmail, setAuthedUserEmail] = useState<string | null>(null);

  onAuthStateChanged(auth, async (user) => {
    const newAuthToken = (await user?.getIdToken()) || null;
    const newAuthedUserEmail = user?.email || null;
    setAuthToken(newAuthToken);
    setAuthedUserEmail(newAuthedUserEmail);
  });

	// TODO: add firebaase app check

  return (
    <FirebaseContext.Provider value={{ authToken, authedUserEmail }}>
      {children}
    </FirebaseContext.Provider>
  );
};
