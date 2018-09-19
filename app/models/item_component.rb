class ItemComponent < ApplicationRecord
  belongs_to :item
  belongs_to :component
end
