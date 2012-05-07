module Leaflet
  class Engine < Rails::Engine
    initializer :append_assets_path do |app|
      # To link to javascripts
      app.config.assets.paths << File.join(config.root, 'lib', 'leaflet', 'src')

      # For additional files
      app.config.assets.paths << File.join(config.root, 'lib', 'zerista')
    end
  end
end