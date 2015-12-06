module Leaflet
  class Engine < ::Rails::Engine
    initializer :append_assets_path do |app|
      app.config.assets.paths << File.join(config.root, 'vendor', 'assets')
    end
  end
end