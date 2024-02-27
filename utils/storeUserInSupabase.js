// utils/storeUserInSupabase.js
import supabase from './supabaseClient';

async function storeUserInSupabase(user) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ user_id: user.id, email:  user.emailAddresses.primary.emailAddress, name: user.firstName, username: user.username }], { upsert: true });

  if (error) {
    console.error('Error storing user in Supabase:', error);
    return false;
  }

  console.log('User stored successfully:', data);
  return true;
}

export default storeUserInSupabase;
