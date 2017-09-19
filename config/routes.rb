Rails.application.routes.draw do
  devise_for :users
  # Rails routing
  resources :users
  resources :concerts
  resources :attendances
  resources :bookings
  resources :airbnbs
end
