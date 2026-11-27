import { supabase } from './supabase';

export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) throw error;
  return data;
}

export async function updateProfile(userId, updates) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function getClients() {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, email, full_name, created_at')
    .eq('role', 'client')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}
