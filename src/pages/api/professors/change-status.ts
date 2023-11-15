import { patchProfessorStatus } from "@/server/endpoints/patch-professor-status";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const ChangeStatusQuerySchema = z.object({
  hyphenatedName: z.string(),
  newStatus: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const validatedSchemaResult = ChangeStatusQuerySchema.safeParse(req.body);

  if (!validatedSchemaResult.success) {
    return res
      .status(400)
      .json({ message: validatedSchemaResult.error.message });
  }

  const { hyphenatedName, newStatus } = validatedSchemaResult.data;
  const authToken = req.headers.authorization?.replace("Bearer ", "");

  if (!authToken)
    return res
      .status(401)
      .json({ message: "Request did not include an auth token!" });

  const response = await patchProfessorStatus(hyphenatedName, newStatus, authToken);

  if (response.error)
    return res
      .status(500)
      .json({ message: "Changing professor status failed!" });
	
  return res.status(200).json({ updatedData: response.data });
}
