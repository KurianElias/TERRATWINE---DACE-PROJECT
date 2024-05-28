let map;
let marker;

function initMap() {
    const initialPosition = { lat: -34.397, lng: 150.644 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: initialPosition,
        zoom: 8
    });
    marker = new google.maps.Marker({
        position: initialPosition,
        map: map
    });

    map.addListener('click', function(event) {
        placeMarker(event.latLng);
    });
}

function placeMarker(location) {
    if (marker) {
        marker.setPosition(location);
    } else {
        marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
}

function saveLocation() {
    const location = marker.getPosition();
    localStorage.setItem('userLocation', JSON.stringify({ lat: location.lat(), lng: location.lng() }));
    window.location.href = 'profile.html';
}
