import { sleep } from "@/common/util";
import { MessageRequestBody } from "@/types/chat";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { messages } = (await request.json()) as MessageRequestBody;
  const encode = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const messageText = messages[messages.length - 1].content;
      for (let i = 0; i < messageText.length; i++) {
        await sleep(100);
        controller.enqueue(encode.encode(messageText[i]));
      }
      controller.close();
    },
  });
  return new Response(stream);
};
