import { LoadingSpinner } from "@/components/loading-spinner";
import { ProfessorPage } from "@/components/professor-page";
import { useFetchProfessorInfo } from "@/hooks/use-fetch-professor-info";
import { useRouter } from "next/router";

const ProfName = () => {
  const router = useRouter();
  const { profName } = router.query;
  const { data } = useFetchProfessorInfo(profName);

  return data ? <ProfessorPage info={data} /> : <LoadingSpinner />;
};

export default ProfName;
