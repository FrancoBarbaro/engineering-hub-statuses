import { FirebaseContextProvider } from "@/context/firebase-context";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <FirebaseContextProvider>
        <Component {...pageProps} />
      </FirebaseContextProvider>
    </ChakraProvider>
  );
};

export default App;
