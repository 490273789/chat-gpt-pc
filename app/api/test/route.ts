import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { url } = request;
  return NextResponse.json({ url });
};
