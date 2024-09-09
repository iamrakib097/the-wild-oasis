import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nvmvpyirhciueuvfccgp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52bXZweWlyaGNpdWV1dmZjY2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3MjE0MzUsImV4cCI6MjA0MTI5NzQzNX0.4Y5Yze6trH4ADxX3vKKKXCA27gjbxqexuvuUdBeZGyY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
