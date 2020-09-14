const mymap = L.map('mapid').setView([45.207694,12.283586], 13.4);
const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
const titleUrl = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
const tiles = L.tileLayer(titleUrl, {attribution})
tiles.addTo(mymap);
mymap.createPane('labels');
mymap.getPane('labels').style.zIndex = 650;
mymap.getPane('labels').style.pointerEvents = 'none';
var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©CartoDB',
        pane: 'labels'
}).addTo(mymap);


var customIcon = L.icon({
    iconUrl: 'assets/img/icon/loc.png',
    iconRetinaUrl: "assets/img/icon/loc-2x.png",
    shadowUrl: 'assets/img/icon/loc-shadow.png',

    iconSize:     [25, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 41],  // the same for the shadow
    popupAnchor:  [1, -34] // point from which the popup should open relative to the iconAnchor
});


var selectedIcon = L.icon({
    iconUrl: 'assets/img/icon/loc.png',
    iconRetinaUrl: "assets/img/icon/loc-2x.png",
    shadowUrl: 'assets/img/icon/loc-shadow.png',

    iconSize:     [40, 64], // size of the icon
    shadowSize:   [54, 64], // size of the shadow
    iconAnchor:   [21, 64], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 64],  // the same for the shadow
    popupAnchor:  [1, -34] // point from which the popup should open relative to the iconAnchor
});

var selectedIconD = L.icon({
    iconUrl: 'assets/img/icon/loc_sel.png',
    iconRetinaUrl: "assets/img/icon/loc-2x_sel.png",
    shadowUrl: 'assets/img/icon/loc-shadow.png',

    iconSize:     [25, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 41],  // the same for the shadow
    popupAnchor:  [1, -34] // point from which the popup should open relative to the iconAnchor
});

markers = [];

var clodi_1 = L.marker([45.190850,12.277845], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_2 = L.marker([45.190379,12.277339], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_3 = L.marker([45.189980,12.277965], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_4 = L.marker([45.188942,12.277321], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_5 = L.marker([45.189162,12.277349], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_6 = L.marker([45.189358,12.277590], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_7 = L.marker([45.189091,12.277558], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_8 = L.marker([45.187756,12.277747], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_9 = L.marker([45.187824,12.277661], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_10 = L.marker([45.190149,12.277980], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_11 = L.marker([45.189517,12.277491], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_12 = L.marker([45.189008,12.277669], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_13 = L.marker([45.188819,12.277657], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_14 = L.marker([45.189286,12.278053], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_15 = L.marker([45.190143,12.277216], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_16 = L.marker([45.190036,12.276807], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var clodi_17 = L.marker([45.190853,12.277070], {icon: customIcon}).addTo(mymap).on('click', markerClick);

markers.push(clodi_1, clodi_2, clodi_3, clodi_4, clodi_5, clodi_6, clodi_7, clodi_8, clodi_9, clodi_10, clodi_11, clodi_12, clodi_13, clodi_14, clodi_15, clodi_16, clodi_17);

var mercato_18 = L.marker([45.219461,12.278838], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_19 = L.marker([45.220796,12.279445], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_20 = L.marker([45.218539,12.278411], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_21 = L.marker([45.221991,12.279885], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_22 = L.marker([45.217313,12.277864], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_23 = L.marker([45.219237,12.278767], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_24 = L.marker([45.217768,12.278107], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_25 = L.marker([45.217927,12.278080], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_26 = L.marker([45.220947,12.279422], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_27 = L.marker([45.220488,12.279295], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_28 = L.marker([45.218207,12.278279], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_29 = L.marker([45.217498,12.278151], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_30 = L.marker([45.219069,12.278666], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_31 = L.marker([45.217087,12.277829], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_32 = L.marker([45.220652,12.279395], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_33 = L.marker([45.220207,12.279189], {icon: customIcon}).addTo(mymap).on('click', markerClick);
var mercato_34 = L.marker([45.217492,12.277962], {icon: customIcon}).addTo(mymap).on('click', markerClick);

markers.push(mercato_18, mercato_19, mercato_20, mercato_21, mercato_22, mercato_23, mercato_24, mercato_25, mercato_26, mercato_27, mercato_28, mercato_29, mercato_30, mercato_31, mercato_32, mercato_33, mercato_34);
for (var i = 0; i < markers.length; i++) {
    markers[i].number = i;
}

var mapid = document.getElementById("mapid");
var photo_wrapper = document.getElementsByClassName("photo_wrapper");

function markerClick(e) {


    for (marker of markers) {
        marker.setIcon(customIcon);
    }
    this.setIcon(selectedIcon);

    if (photo_wrapper[0].style.width == "0%") {
        photo_wrapper[0].style.width="50%";
    }

    mymap.flyTo(this.getLatLng(), 18);

    document.getElementById(this.number+1).scrollIntoView({
        behavior: 'smooth'
    });

}



function clickPhoto(marker){
    mymap.flyTo(marker.getLatLng(), 18);
    for (other_marker of markers) {
        other_marker.setIcon(customIcon);
    }
    marker.setIcon(selectedIcon);
}


setTimeout(function(){
    let splash = document.getElementsByClassName("splash");
    splash[0].style.display = "none";
}, 1500);









