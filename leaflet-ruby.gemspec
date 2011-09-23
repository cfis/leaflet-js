# encoding: utf-8
Gem::Specification.new do |spec|
  spec.name        = 'leaflet-ruby'
  spec.version     = '0.1.0'
  spec.homepage    = 'http://xml4r.github.com/libxml-ruby'
  spec.summary     = 'Ruby Gem for Leaflet Javascript Mapping Library'
  spec.authors = ['Charlie Savage']
  spec.platform = Gem::Platform::RUBY
  spec.files = Dir.glob(['leaflet-ruby.gemspec',
                         'Rakefile',
                         'README.rdoc',
                         'lib/**/*',
                         'vendor/assets/leaflet/dist/*.css',
                         'vendor/assets/leaflet/dist/images/*.png',
                         'vendor/assets/leaflet/src/**/*.js',
                         'vendor/assets/javascripts/*.js'])
  spec.required_ruby_version = '>= 1.8.7'
  spec.date = Time.now
end