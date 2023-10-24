import { ProfessorCard } from "@/components/ProfessorCard";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <ProfessorCard
          name="Dr. Moses Olayemi"
          photo="https://firebasestorage.googleapis.com/v0/b/engineering-hub-api.appspot.com/o/Moses%20Olayemi.jpg?alt=media&token=95f05268-955e-44ec-aa6c-dbee3af26b0a&_gl=1*1847hiv*_ga*MTgxMzc0MjM3NS4xNjk3NTcwNzE1*_ga_CW55HF8NVT*MTY5NzU3MDcxNS4xLjEuMTY5NzU3MTI0MC40OS4wLjA."
          bio="Engineering Thinking Professor"
          status="In Office"
          officeLocation="4th Office on the Right"
          callendly="https://calendly.com/molayemi/office-hours?month=2023-10"
        />
        <ProfessorCard
          name="Dr. Tierney Harvey"
          photo="https://firebasestorage.googleapis.com/v0/b/engineering-hub-api.appspot.com/o/Tierney%20Harvey.jpeg?alt=media&token=2ca5d526-9c3d-4ef8-aa90-78c7e7a50674&_gl=1*13kz6w3*_ga*MTgxMzc0MjM3NS4xNjk3NTcwNzE1*_ga_CW55HF8NVT*MTY5NzU3MDcxNS4xLjEuMTY5NzU3MTI3MS4xOC4wLjA."
          bio="First-Year Engineering Coordinator"
          status="Out of Office"
          officeLocation="3rd Office on the Right"
        />
      </Flex>
    </>
  );
};

export default Home;
