# encoding: utf-8
Gem::Specification.new do |spec|
  spec.name        = 'leaflet-js'
  spec.version     = '0.7.0.3'
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
                         'lib/leaflet/**/*',
                         'lib/leaflet.draw/**/*',
                         'lib/leaflet.label/**/*',
                         'vendor/assets/javascripts/*',
                         'vendor/assets/stylesheets/*',
                         'vendor/assets/images/*'])
  spec.required_ruby_version = '>= 1.9.3'
  spec.license = 'MIT'
  spec.date = Time.now
end
