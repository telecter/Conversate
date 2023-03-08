import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
const supabaseUrl: string = "https://chjbmduxkzytmcktgzvl.supabase.co";
const supabase: any = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoamJtZHV4a3p5dG1ja3RnenZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNTU4MTYsImV4cCI6MTk5MzczMTgxNn0.pQuzRRUFmUOOrUhPYW0DuIo_U25d5KJfmTI6UeWkLGs");

export const fetchMessages = () => {
    supabase.from('messages').select('content').then((data) => {
        return data;
    })
}