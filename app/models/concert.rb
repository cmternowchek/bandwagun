class Concert < ApplicationRecord
has_many :attendances

validates :artist, presence: true
validates :date, presence: true
validates :city, presence: true
validates :venue_name, presence: true
validates :venue_zip, presence: true
validates :ticket_URL, presence: true
end
