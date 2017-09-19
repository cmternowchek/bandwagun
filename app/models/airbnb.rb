class Airbnb < ApplicationRecord
  has_many :bookings

  validates :guests, presence: true
  validates :checkin_date, presence: true
  validates :cost, presence: true
  validates :airbnb_zipcode, presence: true
  validates :listing_url, presence: true
end
