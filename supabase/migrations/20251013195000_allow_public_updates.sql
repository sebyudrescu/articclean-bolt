/*
  # Allow Public Updates for Content Expansion
  
  Temporarily allow public updates to expand page content.
  This enables the expansion script to run with the anon key.
*/

-- Create policy for public updates
CREATE POLICY "Allow public updates for content expansion"
  ON local_service_pages FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);
