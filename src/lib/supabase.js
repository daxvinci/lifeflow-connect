import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jplrrdjembtruzwqmnsh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwbHJyZGplbWJ0cnV6d3FtbnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTk5MzMsImV4cCI6MjA1MzgzNTkzM30.hdQFHOsi51claSOdsQrDIMq_QXtxvH3FbzTs19mblBU";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);