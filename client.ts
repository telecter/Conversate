import {createClient} from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl: string = "chjbmduxkzytmcktgzvl.supabase.co";
const supabase: any = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY"));

const fetchMessages = () => {
    supabase.from('messages').select('content').then((data) => {
        console.log(data);
    })
}