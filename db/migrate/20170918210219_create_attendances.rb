class CreateAttendances < ActiveRecord::Migration[5.1]
  def change
    create_table :attendances do |t|
      t.integer :user_id, null: false
      t.integer :concert_id, null:false

      t.timestamps
    end
  end
end
