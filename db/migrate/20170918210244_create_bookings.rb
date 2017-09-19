class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :airbnb_id, null: false
      t.integer :attendance_id, null: false

      t.timestamps
    end
  end
end
