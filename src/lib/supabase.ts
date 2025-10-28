import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Location {
  id: string;
  slug: string;
  name: string;
  local_references: string[];
  nearby_locations: string[];
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  icon: string;
  base_description: string;
  created_at: string;
}

export interface LocalServicePage {
  id: string;
  service_id: string;
  location_id: string;
  slug: string;
  h1_title: string;
  meta_title: string;
  meta_description: string;
  intro_text: string;
  why_choose_us: string[];
  coverage_areas: string[];
  typical_problems: string[];
  detailed_services: Record<string, string>;
  standards_guarantees: string;
  cta_text: string;
  cta_subtext: string;
  word_count: number;
  section_order: string[];
  h2_titles: Record<string, string>;
  published: boolean;
  created_at: string;
  updated_at: string;
  service?: Service;
  location?: Location;
}

export async function getLocalServicePage(serviceSlug: string, locationSlug: string) {
  const { data, error } = await supabase
    .from('local_service_pages')
    .select(`
      *,
      service:services(*),
      location:locations(*)
    `)
    .eq('slug', `${serviceSlug}/${locationSlug}`)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching local service page:', error);
    return null;
  }

  return data as LocalServicePage | null;
}

export async function getAllLocalServicePages() {
  const { data, error } = await supabase
    .from('local_service_pages')
    .select(`
      *,
      service:services(*),
      location:locations(*)
    `)
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all local service pages:', error);
    return [];
  }

  return data as LocalServicePage[];
}

export async function getServicesByLocation(locationSlug: string) {
  const { data, error } = await supabase
    .from('local_service_pages')
    .select(`
      *,
      service:services(*),
      location:locations(*)
    `)
    .eq('location.slug', locationSlug)
    .eq('published', true);

  if (error) {
    console.error('Error fetching services by location:', error);
    return [];
  }

  return data as LocalServicePage[];
}

export async function getLocationsByService(serviceSlug: string) {
  const { data, error } = await supabase
    .from('local_service_pages')
    .select(`
      *,
      service:services(*),
      location:locations(*)
    `)
    .eq('service.slug', serviceSlug)
    .eq('published', true);

  if (error) {
    console.error('Error fetching locations by service:', error);
    return [];
  }

  return data as LocalServicePage[];
}

export async function getAllLocations() {
  const { data, error } = await supabase
    .from('locations')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching locations:', error);
    return [];
  }

  return data as Location[];
}

export async function getAllServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching services:', error);
    return [];
  }

  return data as Service[];
}
