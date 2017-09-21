class CreateConcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :concerts do |t|
      t.string :artist, null: false
      t.string :date, null: false
      t.string :city, null: false
      t.string :venue_name, null: false
      t.float :venue_lat
      t.float :venue_lng
      t.string :venue_zip, null: false
      t.string :ticket_URL, null: false

      t.timestamps
    end
  end
end
