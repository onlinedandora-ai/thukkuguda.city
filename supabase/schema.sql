-- Supabase Database Schema for Thukkuguda City (ORR Exit 14)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: directory_listings
CREATE TABLE IF NOT EXISTS directory_listings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  category_label TEXT NOT NULL,
  description TEXT,
  address TEXT NOT NULL,
  phone TEXT,
  rating NUMERIC(2,1) DEFAULT 4.0,
  review_count INTEGER DEFAULT 0,
  is_verified BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  lat NUMERIC(9,6) NOT NULL,
  lng NUMERIC(9,6) NOT NULL,
  tags TEXT[],
  image_url TEXT,
  gmaps_url TEXT,
  opening_hours TEXT,
  place_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: user_profiles
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  github_username TEXT,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'resident',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE directory_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public directory listings are readable by everyone"
  ON directory_listings FOR SELECT
  USING (true);

CREATE POLICY "Users can read own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_directory_category ON directory_listings(category);
CREATE INDEX IF NOT EXISTS idx_directory_featured ON directory_listings(is_featured);
