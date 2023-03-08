import { serve } from "https://deno.land/std@0.136.0/http/server.ts";
import { fetchMessages } from "./client.ts";

serve(async(req: Request) => {
  return new Response(await fetchMessages());
});