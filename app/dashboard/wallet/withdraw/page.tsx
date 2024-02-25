import { useAuth } from '@clerk/clerk-react';
import { createClient } from "@supabase/supabase-js";
  
const supabaseClient = async (supabaseAccessToken: string) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    });
    return supabase;
};
   
function App() {
  const { getToken } = useAuth();
  
  const fetchData = async () => {
    const supabaseAccessToken = await getToken({ template: 'BinanceFX' });
  
    // Corrected function call: Pass the variable directly without specifying its type
    const supabase = await supabaseClient(supabaseAccessToken as string);

    
    const { data, error } = await supabase.from('user_id').select();
  
    // Handle the response as needed
  };
  
  return (
    <div className="app">
      <button onClick={fetchData}>Fetch data</button>
    </div>
  );
}
