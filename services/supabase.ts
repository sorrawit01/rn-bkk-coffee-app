// ตั้งค่าการเชื่อมต่อกับ Supabase
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://brcjcbmjwxllewshxuce.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyY2pjYm1qd3hsbGV3c2h4dWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxODQ0OTYsImV4cCI6MjA4NTc2MDQ5Nn0.BcvzHbWJbPTwplHqp3_Pzt_5SA3ZE0uWXtlBZlv4geY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
