class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :daily_number

      t.timestamps
    end
  end
end
