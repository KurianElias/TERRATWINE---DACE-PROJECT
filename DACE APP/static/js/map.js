// static/js/map.js
let map;
let marker;

function initMap() {
    map = L.map('map').setView([8.616294, 76.852845], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(map);

    map.on('click', function(e) {
        let latLng = e.latlng;
        if (marker) {
            marker.setLatLng(latLng);
        } else {
            marker = L.marker(latLng, {
                draggable: true
            }).addTo(map);
        }
        console.log(`Selected location: ${latLng.lat}, ${latLng.lng}`);
    });

    if (marker) {
        marker.on('dragend', function(e) {
            let latLng = marker.getLatLng();
            console.log(`Selected location: ${latLng.lat}, ${latLng.lng}`);
        });
    }
}

function saveLocation() {
    if (marker) {
        let latLng = marker.getLatLng();
        console.log(`Selected location: ${latLng.lat}, ${latLng.lng}`);

        // Save location to localStorage
        localStorage.setItem('userLocation', JSON.stringify({ lat: latLng.lat, lng: latLng.lng }));

        // Capture screenshot of the map
        html2canvas(document.getElementById('map')).then(canvas => {
            const mapScreenshot = canvas.toDataURL();
            localStorage.setItem('mapScreenshot', mapScreenshot);

            // Redirect to profile page
            window.location.href = 'profile.html';
        });
    } else {
        console.log("No location selected.");
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    initMap();
});
