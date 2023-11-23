import { patchProfessorAttribute } from "@/server/endpoints/patch-professor-attribute";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const ChangeAttributeQuerySchema = z.object({
  hyphenatedName: z.string(),
  attribute: z.string(),
  newValue: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const validatedSchemaResult = ChangeAttributeQuerySchema.safeParse(req.body);

  if (!validatedSchemaResult.success) {
    return res
      .status(400)
      .json({ message: validatedSchemaResult.error.message });
  }

  const { hyphenatedName, attribute, newValue } = validatedSchemaResult.data;
  const authToken = req.headers.authorization?.replace("Bearer ", "");

  if (!authToken)
    return res
      .status(401)
      .json({ message: "Request did not include an auth token!" });

  const response = await patchProfessorAttribute(
    hyphenatedName,
    attribute,
    newValue,
    authToken
  );

  if (response.error)
    return res
      .status(500)
      .json({ message: "Changing professor attribute failed!" });

  return res.status(200).json({ updatedData: response.data });
}
