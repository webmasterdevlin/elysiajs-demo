import { FreshContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  return new Response("Hello from from deno fresh!");
};
