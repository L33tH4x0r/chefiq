class Catalog < ApplicationRecord
  has_many :groups
  has_many :categories, through: :groups
end
