Rails.application.routes.draw do
#   # Rails routing
#   devise_for :users
#   root to: redirect('/concerts')
#
#   resources :users
#   resources :concerts
#   resources :attendances
#   resources :bookings
#   resources :airbnbs
# end


# React routing
  devise_for :users, controllers: { sessions: 'users/sessions', comments: 'comments' }
  resources :users
  # resources :concerts, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :concerts, only: [:index, :show] do
        resources :comments do
        end
      end
    end
  end



  root to: redirect('/concerts')
  resources :concerts, only: [:index, :show], to: 'static_pages#index'

end
