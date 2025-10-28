/*
  # Create Local Service Pages Schema

  ## Overview
  Creates comprehensive database structure for managing 200+ localized service pages
  (25 locations × 8 services) with SEO metadata, internal linking, and content variations.

  ## Tables Created

  ### 1. `locations`
  Stores all 25 localities with their metadata and nearby locations mapping
  - `id` (uuid, primary key)
  - `slug` (text, unique) - URL-friendly identifier (e.g., "brescia")
  - `name` (text) - Display name (e.g., "Brescia")
  - `local_references` (jsonb) - Array of local references from Tabella Local
  - `nearby_locations` (jsonb) - Array of 4 nearby location slugs
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `services`
  Stores the 8 main cleaning services
  - `id` (uuid, primary key)
  - `slug` (text, unique) - URL-friendly identifier
  - `name` (text) - Display name
  - `icon` (text) - Icon identifier
  - `base_description` (text) - Generic service description
  - `created_at` (timestamptz)

  ### 3. `local_service_pages`
  Main content table for each service+location combination
  - `id` (uuid, primary key)
  - `service_id` (uuid, foreign key → services)
  - `location_id` (uuid, foreign key → locations)
  - `slug` (text, unique) - Full URL slug
  - `h1_title` (text) - Unique H1 for the page
  - `meta_title` (text, ≤60 chars)
  - `meta_description` (text, ≤160 chars)
  - `intro_text` (text, 120-180 words)
  - `why_choose_us` (jsonb) - Array of 4-6 bullet points
  - `coverage_areas` (jsonb) - Array of 4-8 micro-zones
  - `typical_problems` (jsonb) - Array of 3-5 local problems
  - `detailed_services` (jsonb) - Object with sub-services
  - `standards_guarantees` (text)
  - `cta_text` (text) - Varied CTA text
  - `cta_subtext` (text) - CTA benefit
  - `word_count` (integer)
  - `section_order` (jsonb) - Custom H2 order for variation
  - `h2_titles` (jsonb) - Custom H2 titles
  - `published` (boolean, default true)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for published content
  - Authenticated write access for content management

  ## Indexes
  - Composite index on (service_id, location_id) for fast lookups
  - Index on slug for URL routing
  - Index on published status
*/

-- Create locations table
CREATE TABLE IF NOT EXISTS locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  local_references jsonb NOT NULL DEFAULT '[]'::jsonb,
  nearby_locations jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  icon text DEFAULT '',
  base_description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create local_service_pages table
CREATE TABLE IF NOT EXISTS local_service_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  location_id uuid NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  slug text UNIQUE NOT NULL,
  h1_title text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  intro_text text NOT NULL,
  why_choose_us jsonb NOT NULL DEFAULT '[]'::jsonb,
  coverage_areas jsonb NOT NULL DEFAULT '[]'::jsonb,
  typical_problems jsonb NOT NULL DEFAULT '[]'::jsonb,
  detailed_services jsonb NOT NULL DEFAULT '{}'::jsonb,
  standards_guarantees text NOT NULL DEFAULT '',
  cta_text text NOT NULL,
  cta_subtext text NOT NULL DEFAULT '',
  word_count integer DEFAULT 0,
  section_order jsonb NOT NULL DEFAULT '[]'::jsonb,
  h2_titles jsonb NOT NULL DEFAULT '{}'::jsonb,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(service_id, location_id)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_local_pages_service_location 
  ON local_service_pages(service_id, location_id);
CREATE INDEX IF NOT EXISTS idx_local_pages_slug 
  ON local_service_pages(slug);
CREATE INDEX IF NOT EXISTS idx_local_pages_published 
  ON local_service_pages(published);
CREATE INDEX IF NOT EXISTS idx_locations_slug 
  ON locations(slug);
CREATE INDEX IF NOT EXISTS idx_services_slug 
  ON services(slug);

-- Enable RLS
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE local_service_pages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for locations
CREATE POLICY "Locations are viewable by everyone"
  ON locations FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Locations can be managed by authenticated users"
  ON locations FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for services
CREATE POLICY "Services are viewable by everyone"
  ON services FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Services can be managed by authenticated users"
  ON services FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for local_service_pages
CREATE POLICY "Published pages are viewable by everyone"
  ON local_service_pages FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Pages can be managed by authenticated users"
  ON local_service_pages FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Update trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_locations_updated_at
  BEFORE UPDATE ON locations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_local_service_pages_updated_at
  BEFORE UPDATE ON local_service_pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();