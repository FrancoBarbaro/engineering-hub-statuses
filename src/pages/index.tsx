import { ProfessorCardsPage } from "@/components/professor-cards-page";
import { ProfessorCardsPageSkeleton } from "@/components/professor-cards-page-skeleton";
import { useFetchBasicInfo } from "@/hooks/use-fetch-basic-info";
import { Image } from "@chakra-ui/react";
import Head from "next/head";
import type { FC } from "react";

const Home: FC = () => {
  const { data } = useFetchBasicInfo();

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data ? (
        <ProfessorCardsPage data={data} />
      ) : (
        <ProfessorCardsPageSkeleton />
      )}
    </>
  );
};

export default Home;
