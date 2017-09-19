class CreateAirbnbs < ActiveRecord::Migration[5.1]
  def change
    create_table :airbnbs do |t|
      t.integer :guests, null: false
      t.string :checkin_date, null: false
      t.integer :cost, null: false
      t.string :airbnb_zipcode, null: false
      t.text :listing_url, null: false

      t.timestamps
    end
  end
end
