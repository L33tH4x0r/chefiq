class Group < ApplicationRecord
  belongs_to :category
  belongs_to :catalog
end
