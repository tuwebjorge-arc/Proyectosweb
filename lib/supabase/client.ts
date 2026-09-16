import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Cliente de Supabase para el navegador (sólo operaciones públicas y seguras con RLS).
 * Retorna null si las variables de entorno no están configuradas, permitiendo que la web
 * funcione de forma completamente autónoma sin fallos de compilación.
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
