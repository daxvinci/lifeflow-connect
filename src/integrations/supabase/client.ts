// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jplrrdjembtruzwqmnsh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwbHJyZGplbWJ0cnV6d3FtbnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTk5MzMsImV4cCI6MjA1MzgzNTkzM30.hdQFHOsi51claSOdsQrDIMq_QXtxvH3FbzTs19mblBU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);