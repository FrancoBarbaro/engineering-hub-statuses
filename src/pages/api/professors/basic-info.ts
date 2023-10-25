import { getBasicInfo } from "@/server/endpoints/get-basic-info";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getBasicInfo();

  if (response.error)
    return res
      .status(500)
      .json({ message: "Fetching basic info failed!" });
  return res.status(200).json({ info: response.data });
}
