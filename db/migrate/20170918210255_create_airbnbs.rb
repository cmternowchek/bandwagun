class CreateAirbnbs < ActiveRecord::Migration[5.1]
  def change
    create_table :airbnbs do |t|

      t.timestamps
    end
  end
end
