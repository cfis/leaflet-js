#!/usr/bin/env ruby

require "rubygems"
require "rubygems/package_task"

GEM_NAME = "leaflet-js"

# Read the spec file
spec = Gem::Specification.load("#{GEM_NAME}.gemspec")

# Setup generic gem
Gem::PackageTask.new(spec) do |pkg|
  pkg.package_dir = 'pkg'
  pkg.need_tar    = false
end