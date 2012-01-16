
L.Projection.Identity = {
  project: function(latlng) {
    return new L.Point(latlng.lng, latlng.lat);
  },
	
  unproject: function(point, unbounded) {
    /* Turn on no wrap by passing true as 3rd parameter */
    return new L.LatLng(point.y, point.x, true);
  }
};
