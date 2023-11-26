import { LoadingSpinner } from "@/components/loading-spinner";
import { ProfessorCardsPage } from "@/components/professor-cards-page";
import { useFetchBasicInfo } from "@/hooks/use-fetch-basic-info";
import Head from "next/head";
import type { FC } from "react";

const Home: FC = () => {
  const { data } = useFetchBasicInfo();

  return (
    <>
      <Head>
        <title>Home | Engineering Hub Statuses</title>
        <meta name="description" content="home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data ? <ProfessorCardsPage data={data} /> : <LoadingSpinner />}
    </>
  );
};

export default Home;
