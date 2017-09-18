class CreateConcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :concerts do |t|

      t.timestamps
    end
  end
end
