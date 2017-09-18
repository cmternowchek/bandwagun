Rails.application.routes.draw do
  # Rails routing
  resources :users
  resources :concerts
  resources :attendances
  resources :bookings
  resources :airbnbs
end
