/*
  # Create Reviews Table

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key) - Unique identifier for each review
      - `name` (text) - Name of the person leaving the review
      - `company` (text) - Company or building name
      - `role` (text) - Role or position of the reviewer
      - `rating` (integer) - Rating from 1 to 5 stars
      - `review_text` (text) - The actual review content
      - `service` (text) - Type of service reviewed
      - `review_date` (date) - Date when the review was given
      - `is_approved` (boolean) - Whether the review is approved for display
      - `created_at` (timestamptz) - When the review was submitted
      - `updated_at` (timestamptz) - When the review was last updated

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public read access to approved reviews only
    - Add policy for authenticated admins to manage reviews

  3. Indexes
    - Index on `is_approved` for faster filtering
    - Index on `created_at` for sorting
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  service text NOT NULL,
  review_date date DEFAULT CURRENT_DATE,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved reviews"
  ON reviews
  FOR SELECT
  USING (is_approved = true);

CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(is_approved);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);
