var map = L.map('map').setView([2.3357, 37.9573], 13);


var basemaps = {
    OSM: L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png"),
    Google: L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    }),
}
//   geoserver
var geoserver = 'http://141.51.249.91:8080/geoserver/marsabit/wms?'
var overlay = { 
    RGB_20230212: L.tileLayer.wms(geoserver, {
        layers: 'rgb_230212',
        transparent: 'true',
        format: 'image/png',
    }),
    NDVI_20230212: L.tileLayer.wms(geoserver, {
        layers: 'ndvi__ncc_230212',
        transparent: 'true',
        format: 'image/png',
    }),
    NDVI_20220930: L.tileLayer.wms(geoserver, {
        layers: 'NDVI_20220930',
        transparent: 'true',
        format: 'image/png',
    }),
    what_is_here: L.tileLayer.wms(geoserver,{
        layers: "whats_here",
        transparent: 'true',
        format: 'image/png',
    }),
}


L.control.layers(basemaps, overlay).addTo(this.map);
    
basemaps.OSM.addTo(this.map);
overlay.what_is_here.addTo(this.map);




// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
