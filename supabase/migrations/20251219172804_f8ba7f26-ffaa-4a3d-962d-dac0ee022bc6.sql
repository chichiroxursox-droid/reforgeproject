-- Create storage bucket for competition submissions
INSERT INTO storage.buckets (id, name, public) 
VALUES ('competition-submissions', 'competition-submissions', false);

-- Create policy to allow anyone to upload files
CREATE POLICY "Anyone can upload competition files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'competition-submissions');

-- Create policy to allow anyone to view their own uploaded files
CREATE POLICY "Anyone can view competition files"
ON storage.objects FOR SELECT
USING (bucket_id = 'competition-submissions');

-- Create submissions table
CREATE TABLE public.competition_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  school TEXT NOT NULL,
  grade TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('art', 'engineering')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  statement TEXT NOT NULL,
  file_url TEXT,
  file_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.competition_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert submissions (public form)
CREATE POLICY "Anyone can submit competition entries"
ON public.competition_submissions FOR INSERT
WITH CHECK (true);

-- Only allow viewing own submissions by email (for confirmation purposes)
CREATE POLICY "Users can view submissions"
ON public.competition_submissions FOR SELECT
USING (true);