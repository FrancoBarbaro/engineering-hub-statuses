import { getProfessorInfoFromName } from "@/server/endpoints/get-professor-info-from-name";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const ProfessorInfoQuerySchema = z.object({
  hyphenatedName: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const validatedSchemaResult = ProfessorInfoQuerySchema.safeParse(req.query);

  if (!validatedSchemaResult.success) {
    return res
      .status(400)
      .json({ message: validatedSchemaResult.error.message });
  }

  const { hyphenatedName } = validatedSchemaResult.data;
  const response = await getProfessorInfoFromName(hyphenatedName);

  if (response.error)
    return res.status(500).json({ message: "Fetching professor info failed!" });
  return res.status(200).json({ info: response.data });
}
