Rails.application.routes.draw do
  resources :catalogs
  resources :components
  resources :items
  resources :orders
  resources :menus
  resources :categories
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
