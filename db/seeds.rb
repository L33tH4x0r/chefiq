def attributize_class(obj)
  obj.class.model_name.instance_variable_get(:@i18n_key)
end

def create_associations(parent, children, joinTable)
  children.each do |child|
    joinTable.find_or_create_by(
      attributize_class(parent) => parent,
      attributize_class(child) => child
    )
  end
end

def create_items(names, category)
  names.each do |name|
    Item.create(name: name, category_id: category.id)
  end
end

Dir[Rails.root.join('app/models/*.rb').to_s].each do |filename|
  klass = File.basename(filename, '.rb').camelize.constantize
  next unless klass.ancestors.include?(ActiveRecord::Base)
  next if klass.abstract_class?
  klass.destroy_all
end

dinner =  Catalog.create(name: 'Dinner')
lunch =   Catalog.create(name: 'Lunch')
store =   Catalog.create(name: 'Store')

sandwich_category =   Category.create(name: 'Sandwiches')
salad_category =      Category.create(name: 'Salads')
appetizer_category =  Category.create(name: 'Appetizers')
entree_category =     Category.create(name: 'Entrees')
shirt_category =      Category.create(name: "Shirts")
pant_category =       Category.create(name: 'Pants')

create_associations(
  dinner,
  [
    salad_category,
    appetizer_category,
    entree_category
  ],
  Group)
create_associations(
  lunch,
  [
    salad_category,
    appetizer_category,
    sandwich_category
  ],
  Group)
create_associations(
  store,
  [
    shirt_category,
    pant_category
  ],
  Group)

create_items(
  [
    'Ham Sandwich',
    'Turkey Sandwich'
  ],
  sandwich_category)
create_items(
  [
    'House Salad',
    'Deluxe Salad'
  ],
  salad_category)
create_items(
  [
    'Steak and Lobster',
    'Cheese Burger'
  ],
  entree_category)
create_items(
  [
    'Male Shirt',
    'Female Shirt'
  ],
  shirt_category)
