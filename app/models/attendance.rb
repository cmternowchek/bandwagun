class Attendance < ApplicationRecord
  belongs_to :user
  belongs_to :concert
  has_many :bookings

  validates :user_id, presence: true
  validates :concert_id, presence: true
end
