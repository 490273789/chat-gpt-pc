import { sleep } from "@/common/util";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { messageText } = await request.json();
  const encode = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < messageText.length; i++) {
        await sleep(100);
        controller.enqueue(encode.encode(messageText[i]));
      }
      controller.close();
    },
  });
  return new Response(stream);
};
