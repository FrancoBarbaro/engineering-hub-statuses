import { LoadingSpinner } from "@/components/loading-spinner";
import { ProfessorPage } from "@/components/professor-page";
import { useFetchProfessorInfo } from "@/hooks/use-fetch-professor-info";
import { useRouter } from "next/router";

const ProfName = () => {
  const router = useRouter();
  const { profName } = router.query;
  const { data, changeSwrData } = useFetchProfessorInfo(profName);

  return data ? (
    <ProfessorPage
      info={data}
      hyphenatedName={typeof profName === "string" ? profName : ""}
      changeSwrData={changeSwrData}
    />
  ) : (
    <LoadingSpinner />
  );
};

export default ProfName;
