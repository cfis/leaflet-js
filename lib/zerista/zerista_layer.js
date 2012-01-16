
L.Zerista = L.GeoJSON.extend({
  includes: L.Mixin.Events,

  initialize: function(uri, options) {
    L.Util.setOptions(this, options);
    this._uri = uri;
    this._layers = {};
    this._options = options;

    if (uri) {
//      this.addFeatures(this);
    }
  },

  addFeatures: function($this) {
    $this.on('featureparse', function(e) {
      var popupText = e.properties.display_value;
      e.layer.bindPopup(popupText);
    });
  },

	onAdd: function(map) {
		this._map = map;
		this._iterateLayers(map.addLayer, map);
    this._update();
  },

  _update: function() {
    var self = this
    $.getJSON(self._uri, function(data)
    {
      self.addGeoJSONWithIcon(data);
    });
  },

  addGeoJSONWithIcon: function(geojson) {
    if (geojson.features) {
      for (var i = 0, len = geojson.features.length; i < len; i++) {
        this.addGeoJSONWithIcon(geojson.features[i]);
      }
      return;
    }
    var popupText = "<div class='popup_title'>";
    var icon = geojson.properties.icon

    if (icon) {
      popupText += "<img src='/icons_user/" + icon.versions['medium-64'] + "' class='popup_image'>";
      var iconUrl = '/icons_user/' + icon.versions['small-32'];
      var MyIcon = L.Icon.extend({iconUrl: iconUrl,
                                  iconSize: new L.Point(32, 32),
                                  shadowSize: new L.Point(0, 0),
                                  shadowUrl: ''});

      var layer = this.geometryToLayer(geojson.geometry, function(latLng) {
        return new L.Marker(latLng, {icon: new MyIcon()})
      });

    }
    else {
      var layer = this.geometryToLayer(geojson.geometry)
    }

    popupText += "<h3 class='ui-li-heading'>" + (geojson.link ? geojson.link : geojson.properties.display_value) + "</h3>" + (geojson.by ? ("<p class='ui-li-desc'> By " + geojson.by + "</p>") : '') + "</div>";
    
    if(geojson.properties.article != null )
      popupText += "<div class='popup_article'><p class='ui-li-desc'>" + geojson.properties.article['content'] + "</p></div>";
    
    layer.bindPopup(popupText,{maxWidth: ($(window).width() - 50 )});
    
    if(geojson.properties.id == this._options.active_id  && geojson.geometry.type != 'Point'){
      layer.setStyle({color: this._options.active_color})
    }
    
    this.fire('featureparse', {
      layer: layer,
      properties: geojson.properties,
      geometryType: geojson.geometry.type,
      bbox: geojson.bbox,
      id: geojson.id
    });
      
    this.addLayer(layer);
  },

	coordsToLatLng: function(/*Array*/ coords, /*Boolean*/ reverse)/*: LatLng*/ {
		var lat = parseFloat(coords[reverse ? 0 : 1]),
			lng = parseFloat(coords[reverse ? 1 : 0]);
    var noWrap = true;
		return new L.LatLng(lat, lng, noWrap);
	}
});

L.Util.extend(L.Zerista.prototype, {
  	geometryToLayer: L.GeoJSON["geometryToLayer"],
  	coordsToLatLngs: L.GeoJSON["coordsToLatLngs"]
})
