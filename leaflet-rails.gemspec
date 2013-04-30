# encoding: utf-8
Gem::Specification.new do |spec|
  spec.name        = 'leaflet-rails'
  spec.version     = '0.6.beta1'
  spec.homepage    = 'https://github.com/cfis/leaflet-rails'
  spec.summary     = <<-EOS
Wraps the Leaflet Javascript Mapping Library in a Rails asset gem. Also include Leaflet.Label
and Leaflet.Draw plusins.  For more information
about Leaflet please see http://leafletjs.com/
EOS
  spec.authors = ['Charlie Savage']
  spec.platform = Gem::Platform::RUBY
  spec.files = Dir.glob(['leaflet-rails.gemspec',
                         'CHANGELOG.rdoc',
                         'LICENSE',
                         'Rakefile',
                         'README.rdoc',
                         'lib/leaflet-rails.rb',
                         'lib/leaflet/**/*',
                         'lib/leaflet.draw/**/*',
                         'lib/leaflet.leaflet/**/*',
                         'vendor/assets/images/*',
                         'vendor/assets/stylesheets/*',
                         'vendor/assets/javascripts/*'])
  spec.required_ruby_version = '>= 1.9.3'
  spec.date = Time.now
end