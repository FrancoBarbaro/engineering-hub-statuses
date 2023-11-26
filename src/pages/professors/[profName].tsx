import { LoadingSpinner } from "@/components/loading-spinner";
import { ProfessorPage } from "@/components/professor-page";
import { useFetchProfessorInfo } from "@/hooks/use-fetch-professor-info";
import Head from "next/head";
import { useRouter } from "next/router";

const ProfName = () => {
  const router = useRouter();
  const { profName } = router.query;
  const { data, changeSwrData } = useFetchProfessorInfo(profName);

  return (
    <>
      <Head>
        <title>{data ? data.name : "Loading"} | Engineering Hub Statuses</title>
        <meta name="description" content="professor page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data ? (
        <ProfessorPage
          info={data}
          hyphenatedName={typeof profName === "string" ? profName : ""}
          changeSwrData={changeSwrData}
        />
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default ProfName;
