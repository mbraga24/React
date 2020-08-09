Rails.application.routes.draw do
  resources :pokemons, only: [:index, :create]
  get "/weather", to: "weather#show"
end
