Rails.application.routes.draw do
  root "static_pages#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :todos, only: [:index, :show, :destroy, :update, :create] do
      resources :steps, only: [:destroy, :update, :create]
    end

    resources :steps, only: [:index]
  end


end
