# encoding: utf-8
require_relative 'lib/leaflet-js/version'

Gem::Specification.new do |spec|
  spec.name        = 'leaflet-js'
  spec.version     = Leaflet::VERSION
  spec.homepage    = 'https://github.com/cfis/leaflet-js'
  spec.summary     = <<-EOS
Wraps the Leaflet Javascript Mapping Library in a Rails asset gem. Also include Leaflet.Label
and Leaflet.Draw plusins.  For more information
about Leaflet please see http://leafletjs.com/
EOS

  spec.authors = ['Charlie Savage']
  spec.platform = Gem::Platform::RUBY
  spec.files = Dir.glob(['leaflet-js.gemspec',
                         'CHANGELOG.rdoc',
                         'Rakefile',
                         'README.rdoc',
                         'lib/leaflet-js.rb',
                         'lib/leaflet-js/version.rb',
                         'lib/leaflet-js/engine.rb',
                         'vendor/assets/Leaflet/src/**/*',
                         'vendor/assets/Leaflet/dist/images/*',
                         'vendor/assets/Leaflet.draw/src/**/*',
                         'vendor/assets/Leaflet.draw/dist/images/*',
                         'vendor/assets/Leaflet.label/src/**/*',
                         'vendor/assets/*.js',
                         'vendor/assets/*.css',
                         'vendor/assets/*.erb'])
  spec.required_ruby_version = '>= 1.9.3'
  spec.license = 'MIT'
  spec.date = Time.now
end
