// The core of the library, including OOP, events, DOM facilities, basic units,
// projections (EPSG:3857 and EPSG:4326) and the base Map class.
//=require ../../../lib/leaflet/src/Leaflet.js
//=require ../../../lib/leaflet/src/core/Util.js
//=require ../../../lib/leaflet/src/core/Class.js
//=require ../../../lib/leaflet/src/core/Events.js
//=require ../../../lib/leaflet/src/core/Browser.js
//=require ../../../lib/leaflet/src/geometry/Point.js
//=require ../../../lib/leaflet/src/geometry/Bounds.js
//=require ../../../lib/leaflet/src/geometry/Transformation.js
//=require ../../../lib/leaflet/src/dom/DomUtil.js
//=require ../../../lib/leaflet/src/geo/LatLng.js
//=require ../../../lib/leaflet/src/geo/LatLngBounds.js
//=require ../../../lib/leaflet/src/geo/projection/Projection.js
//=require ../../../lib/leaflet/src/geo/projection/Projection.SphericalMercator.js
//=require ../../../lib/leaflet/src/geo/projection/Projection.LonLat.js
//=require ../../../lib/leaflet/src/geo/projection/Projection.Identity.js
//=require ../../../lib/leaflet/src/geo/crs/CRS.js
//=require ../../../lib/leaflet/src/geo/crs/CRS.EPSG3857.js
//=require ../../../lib/leaflet/src/geo/crs/CRS.EPSG4326.js
//=require ../../../lib/leaflet/src/geo/crs/CRS.Cartesian.js

//=require ../../../lib/leaflet/src/map/Map.js

// EPSG3395
//=require ../../../lib/leaflet/src/geo/projection/Projection.Mercator.js
//=require ../../../lib/leaflet/src/geo/crs/CRS.EPSG3395.js

// TileLayer
//=require ../../../lib/leaflet/src/layer/tile/TileLayer.js

// TileLayerWMS
//=require ../../../lib/leaflet/src/layer/tile/TileLayer.WMS.js

// TileLayerCanvas
//=require ../../../lib/leaflet/src/layer/tile/TileLayer.Canvas.js

// ImageOverlay
//=require ../../../lib/leaflet/src/layer/ImageOverlay.js

// Marker
//=require ../../../lib/leaflet/src/layer/marker/Icon.js
//=require ../../../lib/leaflet/src/layer/marker/Marker.js

// DivIcon
//=require ../../../lib/leaflet/src/layer/marker/DivIcon.js

// Popup
//=require ../../../lib/leaflet/src/layer/Popup.js
//=require ../../../lib/leaflet/src/layer/marker/Marker.Popup.js
//=require ../../../lib/leaflet/src/map/ext/Map.Popup.js

// LayerGroup:
//=require ../../../lib/leaflet/src/layer/LayerGroup.js

// FeatureGroup
//=require ../../../lib/leaflet/src/layer/FeatureGroup.js

// Path
//=require ../../../lib/leaflet/src/layer/vector/Path.js
//=require ../../../lib/leaflet/src/layer/vector/Path.SVG.js
//=require ../../../lib/leaflet/src/layer/vector/Path.Popup.js

// PathVML
//=require ../../../lib/leaflet/src/layer/vector/Path.VML.js

// Polyline
//=require ../../../lib/leaflet/src/geometry/LineUtil.js
//=require ../../../lib/leaflet/src/layer/vector/Polyline.js

// Polygon
//=require ../../../lib/leaflet/src/geometry/PolyUtil.js
//=require ../../../lib/leaflet/src/layer/vector/Polygon.js
  
// MultiPoly
//=require ../../../lib/leaflet/src/layer/vector/MultiPoly.js

// Rectangle
//=require ../../../lib/leaflet/src/layer/vector/Rectangle.js

// Circle
//=require ../../../lib/leaflet/src/layer/vector/Circle.js

// CircleMarker
//=require ../../../lib/leaflet/src/layer/vector/CircleMarker.js

// VectorsCanvas
//=require ../../../lib/leaflet/src/layer/vector/canvas/Polyline.Canvas.js
//=require ../../../lib/leaflet/src/layer/vector/canvas/Polygon.Canvas.js
//=require ../../../lib/leaflet/src/layer/vector/canvas/Circle.Canvas.js

// GeoJSON
//=require ../../../lib/leaflet/src/layer/GeoJSON.js

// MapDrag
//=require ../../../lib/leaflet/src/dom/DomEvent.js
//=require ../../../lib/leaflet/src/dom/Draggable.js
//=require ../../../lib/leaflet/src/core/Handler.js
//=require ../../../lib/leaflet/src/map/handler/Map.Drag.js

// MouseZoom
//=require ../../../lib/leaflet/src/map/handler/Map.DoubleClickZoom.js
//=require ../../../lib/leaflet/src/map/handler/Map.ScrollWheelZoom.js

// TouchZoom
//=require ../../../lib/leaflet/src/dom/DomEvent.DoubleTap.js
//=require ../../../lib/leaflet/src/map/handler/Map.TouchZoom.js

// BoxZoom
//=require ../../../lib/leaflet/src/map/handler/Map.BoxZoom.js

// MarkerDrag
//=require ../../../lib/leaflet/src/layer/marker/Marker.Drag.js

// ControlZoom
//=require ../../../lib/leaflet/src/control/Control.js
//=require ../../../lib/leaflet/src/map/ext/Map.Control.js
//=require ../../../lib/leaflet/src/control/Control.Zoom.js

// ControlAttrib
//=require ../../../lib/leaflet/src/control/Control.Attribution.js

// ControlScale
//=require ../../../lib/leaflet/src/control/Control.Scale.js

// ControlLayers
//=require ../../../lib/leaflet/src/control/Control.Layers.js

// AnimationNative
//=require ../../../lib/leaflet/src/dom/transition/Transition.js
//=require ../../../lib/leaflet/src/dom/transition/Transition.Native.js

// AnimationTimer
//=require ../../../lib/leaflet/src/dom/transition/Transition.Timer.js

// AnimationPan
//=require ../../../lib/leaflet/src/map/anim/Map.PanAnimation.js

// AnimationZoom
//=require ../../../lib/leaflet/src/map/anim/Map.ZoomAnimation.js

// Geolocation
//=require ../../../lib/leaflet/src/map/ext/Map.Geolocation.js
