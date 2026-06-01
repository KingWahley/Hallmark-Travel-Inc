import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Determine if we have valid-looking Supabase credentials
export const isSupabaseConfigured = 
  supabaseUrl && 
  supabaseUrl !== 'placeholder' && 
  !supabaseUrl.includes('placeholder-url') &&
  !supabaseUrl.includes('your-project-id') &&
  supabaseAnonKey &&
  supabaseAnonKey !== 'placeholder' &&
  !supabaseAnonKey.includes('your-anon-key-here');

// Initialize Supabase Client (falls back to a dummy client if not configured to prevent crashes)
export const supabase = createClient(
  isSupabaseConfigured ? supabaseUrl : 'https://placeholder-url.supabase.co',
  isSupabaseConfigured ? supabaseAnonKey : 'placeholder-key'
);
