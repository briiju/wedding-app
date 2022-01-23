CREATE DATABASE IF NOT EXISTS haa_data

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

