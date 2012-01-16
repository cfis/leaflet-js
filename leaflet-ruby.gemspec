# encoding: utf-8
Gem::Specification.new do |spec|
  spec.name        = 'leaflet-ruby'
  spec.version     = '0.3.beta1'
  spec.homepage    = 'https://github.com/cfis/leaflet-ruby'
  spec.summary     <<-EOS
Wraps the Leaflet Javascript Mapping Library in a Rails asset gem.  For more information
about Leaflet please see http://leaflet.cloudmade.com.
EOS
  spec.authors = ['Charlie Savage']
  spec.platform = Gem::Platform::RUBY
  spec.files = Dir.glob(['leaflet-ruby.gemspec',
                         'Rakefile',
                         'README.rdoc',
                         'lib/leaflet.rb',
                         'lib/zerista/*',
                         'lib/leaflet/**/*',
                         'vendor/assets/stylesheets/*.css',
                         'vendor/assets/javascripts/*.js'])
  spec.required_ruby_version = '>= 1.8.7'
  spec.date = Time.now
end