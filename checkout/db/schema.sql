DROP DATABASE IF EXISTS booking;

CREATE DATABASE IF NOT EXISTS booking;

USE booking;

CREATE TABLE IF NOT EXISTS rooms (
  room_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nightly_price INT NOT NULL,
  past_week_views INT NOT NULL,
  cleaning_fee INT NOT NULL,
  service_fee INT NOT NULL,
  last_updated DATE NOT NULL,
  review_count INT NOT NULL,
  avg_rating INT NOT NULL
);

CREATE TABLE IF NOT EXISTS bookings (
  booking_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_id INT NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  adults INT NOT NULL,
  children INT NOT NULL,
  infants INT NOT NULL,
  blackout BOOLEAN NOT NULL,
  FOREIGN KEY (room_id) REFERENCES rooms (room_id)
);
