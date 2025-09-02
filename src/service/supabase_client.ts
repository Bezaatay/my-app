import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

export const supabase = createClient(
  'https://qwiqohshycafehqvmchg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3aXFvaHNoeWNhZmVocXZtY2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MDcyNzMsImV4cCI6MjA3MTM4MzI3M30.7M2JI0UunK89Nle3efkvFUzQZYiEgto_hultV2sq_qQ',
);
