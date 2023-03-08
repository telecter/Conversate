import { serve } from 'https://deno.land/std@0.136.0/http/server.ts'


handler = () => {
    return new Response("It works!");
}



serve(handler);