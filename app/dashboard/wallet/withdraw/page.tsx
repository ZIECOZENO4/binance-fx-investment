import { useAuth } from '@clerk/clerk-react';
import { createClient } from "@supabase/supabase-js";
 
const supabaseClient = async (supabaseAccessToken: string) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    });
    // set Supabase JWT on the client object,
    // so it is sent up with all Supabase requests
    return supabase;
  };
  
function App() {
  const { getToken } = useAuth();
 
  const fetchData = async () => {
    // TODO #1: Replace with your JWT template name
    const supabaseAccessToken = await getToken({ template: 'BinanceFX' });
 
    const supabase = await supabaseClient(supabaseAccessToken);
    
    // TODO #2: Replace with your database table name
    
    const { data, error } = await supabase.from('user_id').select();
 
    // TODO #3: Handle the response
  };
 
  return (
    <div className="app">
      <button onClick={fetchData}>Fetch data</button>
    </div>
  );
}