import { ProfessorPage } from "@/components/professor-page";
import { ProfessorPageSkeleton } from "@/components/professor-page-skeleton";
import { useFetchProfessorInfo } from "@/hooks/use-fetch-professor-info";
import { useRouter } from "next/router";

const ProfName = () => {
  const router = useRouter();
  const { profName } = router.query;
  const { data } = useFetchProfessorInfo(profName);

  return data ? <ProfessorPage info={data} /> : <ProfessorPageSkeleton />;
};

export default ProfName;
