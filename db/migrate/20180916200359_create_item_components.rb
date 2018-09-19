class CreateItemComponents < ActiveRecord::Migration[5.2]
  def change
    create_table :item_components do |t|
      t.references :item, foreign_key: true
      t.references :component, foreign_key: true

      t.timestamps
    end
  end
end
