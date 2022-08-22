-- CREATE DATABASE IF NOT EXISTS haa_data

CREATE TABLE IF NOT EXISTS haa_data.rsvp (
    id BIGSERIAL PRIMARY KEY,
    full_name TEXT,
    email TEXT,
    guests TEXT,
    events TEXT,
    created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS haa_data.contact (
    id BIGSERIAL PRIMARY KEY,
    full_name TEXT,
    email TEXT,
    phone_number TEXT,
    message TEXT,
    created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE haa_data.contact
ADD COLUMN acknowledged boolean DEFAULT false,
ADD COLUMN updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE haa_data.rsvp
ADD COLUMN acknowledged boolean DEFAULT false,
ADD COLUMN updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

--- STEP 2
ALTER TABLE haa_data.rsvp
RENAME COLUMN email TO phone,
haa_data.rsvp RENAME COLUMN events TO message,
haa_data.rsvp ADD COLUMN attending boolean DEFAULT true;
