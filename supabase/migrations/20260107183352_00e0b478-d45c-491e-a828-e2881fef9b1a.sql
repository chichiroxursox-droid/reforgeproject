-- Create storage bucket for competition submissions
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'competition-submissions',
  'competition-submissions',
  true,
  52428800, -- 50MB limit
  ARRAY['application/pdf', 'image/png', 'image/jpeg', 'image/gif', 'image/webp', 'video/mp4', 'video/quicktime']
)
ON CONFLICT (id) DO NOTHING;

-- Create policy to allow anyone to upload files
CREATE POLICY "Allow public uploads" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'competition-submissions');

-- Create policy to allow anyone to read files
CREATE POLICY "Allow public reads" ON storage.objects
FOR SELECT USING (bucket_id = 'competition-submissions');