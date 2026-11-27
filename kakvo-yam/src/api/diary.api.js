import { supabase } from './supabase';

export async function getDiarySessions() {
  const { data, error } = await supabase
    .from('diary_sessions')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function getDiarySession(sessionId) {
  const { data, error } = await supabase
    .from('diary_sessions')
    .select('*')
    .eq('id', sessionId)
    .single();
  if (error) throw error;
  return data;
}

export async function createDiarySession(startDate) {
  const { data, error } = await supabase
    .from('diary_sessions')
    .insert({ start_date: startDate })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function getDiaryDays(sessionId) {
  const { data, error } = await supabase
    .from('diary_days')
    .select('*')
    .eq('session_id', sessionId)
    .order('day_number', { ascending: true });
  if (error) throw error;
  return data;
}

export async function getFoodEntries(diaryDayId) {
  const { data, error } = await supabase
    .from('food_entries')
    .select('*')
    .eq('diary_day_id', diaryDayId)
    .order('meal_time', { ascending: true, nullsFirst: true });
  if (error) throw error;
  return data;
}

export async function createFoodEntry(entry) {
  const { data, error } = await supabase
    .from('food_entries')
    .insert(entry)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateFoodEntry(entryId, updates) {
  const { data, error } = await supabase
    .from('food_entries')
    .update(updates)
    .eq('id', entryId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteFoodEntry(entryId) {
  const { error } = await supabase.from('food_entries').delete().eq('id', entryId);
  if (error) throw error;
}

export async function submitDiarySession(sessionId) {
  const { data, error } = await supabase
    .from('diary_sessions')
    .update({ status: 'submitted' })
    .eq('id', sessionId)
    .select()
    .single();
  if (error) throw error;
  return data;
}
