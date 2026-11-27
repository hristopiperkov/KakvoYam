import { supabase } from './supabase';

export async function getNutritionReview(sessionId) {
  const { data, error } = await supabase
    .from('nutrition_reviews')
    .select('*')
    .eq('session_id', sessionId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function saveNutritionReview(review) {
  const { data, error } = await supabase
    .from('nutrition_reviews')
    .upsert(review, { onConflict: 'session_id' })
    .select()
    .single();
  if (error) throw error;
  return data;
}
