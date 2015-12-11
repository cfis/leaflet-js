// The core of the library, including OOP, events, DOM facilities, basic units,
// projections (EPSG:3857 and EPSG:4326) and the base Map class.
//=require Leaflet/src/Leaflet.js
//=require Leaflet/src/core/Util.js
//=require Leaflet/src/core/Class.js
//=require Leaflet/src/core/Events.js
//=require Leaflet/src/core/Browser.js
//=require Leaflet/src/geometry/Point.js
//=require Leaflet/src/geometry/Bounds.js
//=require Leaflet/src/geometry/Transformation.js
//=require Leaflet/src/dom/DomUtil.js
//=require Leaflet/src/geo/LatLng.js
//=require Leaflet/src/geo/LatLngBounds.js
//=require Leaflet/src/geo/projection/Projection.js
//=require Leaflet/src/geo/projection/Projection.SphericalMercator.js
//=require Leaflet/src/geo/projection/Projection.LonLat.js
//=require Leaflet/src/geo/crs/CRS.js
//=require Leaflet/src/geo/crs/CRS.Simple.js
//=require Leaflet/src/geo/crs/CRS.EPSG3857.js
//=require Leaflet/src/geo/crs/CRS.EPSG4326.js
//=require Leaflet/src/map/Map.js

// EPSG3395
//=require Leaflet/src/geo/projection/Projection.Mercator.js
//=require Leaflet/src/geo/crs/CRS.EPSG3395.js

// TileLayer
//=require Leaflet/src/layer/tile/TileLayer.js

// TileLayerWMS
//=require Leaflet/src/layer/tile/TileLayer.WMS.js

// TileLayerCanvas
//=require Leaflet/src/layer/tile/TileLayer.Canvas.js

// ImageOverlay
//=require Leaflet/src/layer/ImageOverlay.js

// Marker
//=require Leaflet/src/layer/marker/Icon.js
//=require Leaflet/src/layer/marker/Icon.Default.js
//=require Leaflet/src/layer/marker/Marker.js

// DivIcon
//=require Leaflet/src/layer/marker/DivIcon.js

// Popup
//=require Leaflet/src/layer/Popup.js
//=require Leaflet/src/layer/marker/Marker.Popup.js

// LayerGroup:
//=require Leaflet/src/layer/LayerGroup.js

// FeatureGroup
//=require Leaflet/src/layer/FeatureGroup.js

// Path
//=require Leaflet/src/layer/vector/Path.js
//=require Leaflet/src/layer/vector/Path.SVG.js
//=require Leaflet/src/layer/vector/Path.Popup.js

// PathVML
//=require Leaflet/src/layer/vector/Path.VML.js

// PathCanvas
//=require Leaflet/src/layer/vector/canvas/Path.Canvas.js

// Polyline
//=require Leaflet/src/geometry/LineUtil.js
//=require Leaflet/src/layer/vector/Polyline.js

// Polygon
//=require Leaflet/src/geometry/PolyUtil.js
//=require Leaflet/src/layer/vector/Polygon.js

// MultiPoly
//=require Leaflet/src/layer/vector/MultiPoly.js

// Rectangle
//=require Leaflet/src/layer/vector/Rectangle.js

// Circle
//=require Leaflet/src/layer/vector/Circle.js

// CircleMarker
//=require Leaflet/src/layer/vector/CircleMarker.js

// VectorsCanvas
//=require Leaflet/src/layer/vector/canvas/Polyline.Canvas.js
//=require Leaflet/src/layer/vector/canvas/Polygon.Canvas.js
//=require Leaflet/src/layer/vector/canvas/Circle.Canvas.js
//=require Leaflet/src/layer/vector/canvas/CircleMarker.Canvas.js

// GeoJSON
//=require Leaflet/src/layer/GeoJSON.js

// MapDrag
//=require Leaflet/src/dom/DomEvent.js
//=require Leaflet/src/dom/Draggable.js
//=require Leaflet/src/core/Handler.js
//=require Leaflet/src/map/handler/Map.Drag.js

// MouseZoom
//=require Leaflet/src/dom/DomEvent.js
//=require Leaflet/src/core/Handler.js
//=require Leaflet/src/map/handler/Map.DoubleClickZoom.js
//=require Leaflet/src/map/handler/Map.ScrollWheelZoom.js

// TouchZoom
//=require Leaflet/src/dom/DomEvent.js
//=require Leaflet/src/dom/DomEvent.DoubleTap.js
//=require Leaflet/src/dom/DomEvent.Pointer.js
//=require Leaflet/src/core/Handler.js
//=require Leaflet/src/map/handler/Map.TouchZoom.js
//=require Leaflet/src/map/handler/Map.Tap.js

// BoxZoom
//=require Leaflet/src/map/handler/Map.BoxZoom.js

// Keyboard
//=require Leaflet/src/map/handler/Map.Keyboard.js

// MarkerDrag
//=require Leaflet/src/layer/marker/Marker.Drag.js

// ControlZoom
//=require Leaflet/src/control/Control.js
//=require Leaflet/src/control/Control.Zoom.js

// ControlAttrib
//=require Leaflet/src/control/Control.js
//=require Leaflet/src/control/Control.Attribution.js

// ControlScale
//=require Leaflet/src/control/Control.js
//=require Leaflet/src/control/Control.Scale.js

// ControlLayers
//=require Leaflet/src/control/Control.js
//=require Leaflet/src/control/Control.Layers.js

// AnimationPan
//=require Leaflet/src/dom/DomEvent.js
//=require Leaflet/src/dom/PosAnimation.js
//=require Leaflet/src/map/anim/Map.PanAnimation.js

// AnimationTimer
//=require Leaflet/src/dom/PosAnimation.Timer.js

// AnimationZoom
//=require Leaflet/src/map/anim/Map.ZoomAnimation.js
//=require Leaflet/src/layer/tile/TileLayer.Anim.js

// Geolocation
//=require Leaflet/src/map/ext/Map.Geolocation.js
