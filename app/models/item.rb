class Item < ApplicationRecord
  has_many :item_components
  has_many :components, through: :item_components
  belongs_to :category 
end
