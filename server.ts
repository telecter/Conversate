import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { fetchMessages } from "./client.ts";
const app: Application = new Application();


app
  .get("/fetch", (c) => {
    return fetchMessages;
  })
  .start({ port: 8000 });