import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl: string = "https://chjbmduxkzytmcktgzvl.supabase.co";
const supabase: any = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY"));

export const fetchMessages = async() => {
    const { data, err } = await supabase.from('messages').select('content');
    return data;
}