import {createClient} from '@supabase/supabase-js'

const API_KEY = import.meta.env.VITE_CREATORVERSE_API_KEY;
const URL = import.meta.env.VITE_CREATORVERSE_URL;

export const client = createClient(URL, API_KEY);