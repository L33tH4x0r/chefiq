Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :catalogs
      resources :components
      resources :items
      resources :orders
      resources :menus
      resources :categories
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
