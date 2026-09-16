import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Cliente de Supabase para operaciones del servidor (API Routes).
 * NUNCA importar ni ejecutar este cliente en componentes 'use client'.
 */
export function getSupabaseServerClient() {
  if (!supabaseUrl) {
    return null;
  }

  // Priorizar service role key en servidor si existe, sino anon key
  const key = supabaseServiceKey || supabaseAnonKey;
  if (!key) {
    return null;
  }

  return createClient(supabaseUrl, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
