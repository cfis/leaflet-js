// The core of the library, including OOP, events, DOM facilities, basic units,
// projections (EPSG:3857 and EPSG:4326) and the base Map class.
//=require leaflet/src/Leaflet.js
//=require leaflet/src/core/Util.js
//=require leaflet/src/core/Class.js
//=require leaflet/src/core/Events.js
//=require leaflet/src/core/Browser.js
//=require leaflet/src/geometry/Point.js
//=require leaflet/src/geometry/Bounds.js
//=require leaflet/src/geometry/Transformation.js
//=require leaflet/src/dom/DomUtil.js
//=require leaflet/src/geo/LatLng.js
//=require leaflet/src/geo/LatLngBounds.js
//=require leaflet/src/geo/projection/Projection.LonLat.js
//=require leaflet/src/geo/projection/Projection.SphericalMercator.js
//=require leaflet/src/geo/crs/CRS.js
//=require leaflet/src/geo/crs/CRS.Simple.js
//=require leaflet/src/geo/crs/CRS.Earth.js
//=require leaflet/src/geo/crs/CRS.EPSG3857.js
//=require leaflet/src/geo/crs/CRS.EPSG4326.js
//=require leaflet/src/map/Map.js
//=require leaflet/src/layer/Layer.js

// EPSG3395
//=require leaflet/src/geo/projection/Projection.Mercator.js
//=require leaflet/src/geo/crs/CRS.EPSG3395.js

// Grid Layer
//=require leaflet/src/layer/tile/GridLayer.js

// TileLayer
//=require leaflet/src/layer/tile/TileLayer.js

// TileLayerWMS
//=require leaflet/src/layer/tile/TileLayer.WMS.js

// ImageOverlay
//=require leaflet/src/layer/ImageOverlay.js

// Marker
//=require leaflet/src/layer/marker/Icon.js
//=require leaflet/src/layer/marker/Icon.Default.js
//=require leaflet/src/layer/marker/Marker.js

// DivIcon
//=require leaflet/src/layer/marker/DivIcon.js

// Popup
//=require leaflet/src/layer/Popup.js
//=require leaflet/src/layer/Layer.Popup.js
//=require leaflet/src/layer/marker/Marker.Popup.js

// LayerGroup:
//=require leaflet/src/layer/LayerGroup.js

// FeatureGroup
//=require leaflet/src/layer/FeatureGroup.js

// Path
//=require leaflet/src/layer/vector/Renderer.js
//=require leaflet/src/layer/vector/Path.js

// Polyline
//=require leaflet/src/geometry/LineUtil.js
//=require leaflet/src/layer/vector/Polyline.js

// Polygon
//=require leaflet/src/geometry/PolyUtil.js
//=require leaflet/src/layer/vector/Polygon.js
  
// Rectangle
//=require leaflet/src/layer/vector/Rectangle.js

// CircleMarker
//=require leaflet/src/layer/vector/CircleMarker.js

// Circle
//=require leaflet/src/layer/vector/Circle.js

// SVG
//=require leaflet/src/layer/vector/SVG.js

// VML
//=require leaflet/src/layer/vector/SVG.VML.js

// Canvas
//=require leaflet/src/layer/vector/Canvas.js

// GeoJSON
//=require leaflet/src/layer/GeoJSON.js

// MapDrag
//=require leaflet/src/dom/DomEvent.js
//=require leaflet/src/dom/Draggable.js
//=require leaflet/src/core/Handler.js
//=require leaflet/src/map/handler/Map.Drag.js

// MouseZoom
//=require leaflet/src/dom/DomEvent.js
//=require leaflet/src/core/Handler.js
//=require leaflet/src/map/handler/Map.DoubleClickZoom.js
//=require leaflet/src/map/handler/Map.ScrollWheelZoom.js

// TouchZoom
//=require leaflet/src/dom/DomEvent.js
//=require leaflet/src/dom/DomEvent.DoubleTap.js
//=require leaflet/src/dom/DomEvent.Pointer.js
//=require leaflet/src/core/Handler.js
//=require leaflet/src/map/handler/Map.TouchZoom.js
//=require leaflet/src/map/handler/Map.Tap.js

// BoxZoom
//=require leaflet/src/map/handler/Map.BoxZoom.js

// Keyboard
//=require leaflet/src/map/handler/Map.Keyboard.js

// MarkerDrag
//=require leaflet/src/layer/marker/Marker.Drag.js

// ControlZoom
//=require leaflet/src/control/Control.js
//=require leaflet/src/control/Control.Zoom.js

// ControlAttrib
//=require leaflet/src/control/Control.js
//=require leaflet/src/control/Control.Attribution.js

// ControlScale
//=require leaflet/src/control/Control.js
//=require leaflet/src/control/Control.Scale.js

// ControlLayers
//=require leaflet/src/control/Control.js
//=require leaflet/src/control/Control.Layers.js

// AnimationPan
//=require leaflet/src/dom/DomEvent.js
//=require leaflet/src/dom/PosAnimation.js
//=require leaflet/src/map/anim/Map.PanAnimation.js

// AnimationTimer
//=require leaflet/src/dom/PosAnimation.Timer.js

// AnimationZoom
//=require leaflet/src/map/anim/Map.ZoomAnimation.js

// Geolocation
//=require leaflet/src/map/ext/Map.Geolocation.js
