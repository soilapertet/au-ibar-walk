// Centralized Client file 
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// createClient() sets up a connection configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey);