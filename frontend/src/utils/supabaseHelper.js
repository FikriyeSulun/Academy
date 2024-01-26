import { createClient } from '@supabase/supabase-js'
const url = 'https://jxclitqaeokejtukmuof.supabase.co';
const secretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4Y2xpdHFhZW9rZWp0dWttdW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzNDE3MjEsImV4cCI6MjAxNTkxNzcyMX0.JRP9sw_G4uBmpn8IfU9crtyQ_IL2wOQKUPgHo-5shTI';
const supabase = createClient(url, secretKey)
export default supabase;