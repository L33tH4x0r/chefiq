class Component < ApplicationRecord
  has_many :item_components
  has_many :components, through: :item_components 
end
