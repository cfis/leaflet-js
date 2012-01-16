= Leaflet Ruby

== Overview
leaflet-ruby wraps the Leaflet Javascript library in an asset gem so it can
easily be used with Rails.  For more information about the Leaflet library, 
please visit http://leaflet.cloudmade.com/.

== Installation

In your Gemfile, add this line:

gem "leaflet-ruby"

Then, run bundle install. You're done!

== Usage

Leaflet provides javascript, css and image assets.  To use these assets in your project, either 
require the files below from your erb files or add them to your top level application.js and css files.

Leaflet provides the following assets:

=== Javascripts

leaflet.js

=== Stylesheets

leaflet.css
leaflet.ie.css

=== Images

layers.png
marker.png
market-shadow.png
popup-close.png
zoom-in.png
zoom-out.png

== Versions

The version number of the leaflet-ruby gem matches the version number of the leaflet library
that it wraps.  Thus if you want to use Leaflet version 0.3 you should use leaflet-ruby-0.3.gem.

== Support

If you have any questions about leaflet, please refer them to the Leaflet maintainers at
http://leaflet.cloudmade.com.  If you have any questions about how leaflet-ruby wraps
leaflet, then please refer to https://github.com/cfis/leaflet-ruby.

== License

See LICENSE for license information about leaflet-ruby.  Please note that the Leaflet project 
has its own LICENSE file also.
