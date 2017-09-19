class Concert < ApplicationRecord
has_many :attendances

validates :artist, presence: true
validates :date, presence: true
validates :venue_name, presence: true
validates :venue_zip, presence: true
validates :ticket_URL, presence: true
validates_format_of :ticket_URL, with: /\A(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\Z/i
end
