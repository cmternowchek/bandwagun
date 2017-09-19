class Booking < ApplicationRecord
  belongs_to :airbnb
  belongs_to :attendance

  validates :airbnb_id, presence: true
  validates :attendance_id, presence: true

end
