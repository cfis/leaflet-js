module Leaflet
  class Engine < Rails::Engine
    initializer :append_assets_path do |app|
      puts 1111111111111
      puts config.root
      puts File.join(config.root, 'lib')
      
      # For javascripts
      app.config.assets.paths << File.join(config.root, 'lib', 'leaflet', 'src')
      
      # For images and stylesheets
      app.config.assets.paths << File.join(config.root, 'lib', 'leaflet', 'dist')

      # For additional files
      app.config.assets.paths << File.join(config.root, 'lib', 'zerista')
    end
  end
end