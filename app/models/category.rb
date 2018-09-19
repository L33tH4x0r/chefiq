class Category < ApplicationRecord
  has_many :groups
  has_many :catalogs, through: :groups
  has_many :items
end
