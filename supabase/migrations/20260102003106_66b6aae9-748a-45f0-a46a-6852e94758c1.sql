-- Drop the overly permissive SELECT policy that exposes student data
DROP POLICY IF EXISTS "Users can view submissions" ON public.competition_submissions;

-- Only service role (backend/admin) can now read submissions
-- No public SELECT policy needed since admins access via backend dashboard