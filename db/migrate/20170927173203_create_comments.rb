class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :concert_id, null:false
      t.string :title, null: false
      t.text :body, null: false
      t.timestamps
    end
  end
end
