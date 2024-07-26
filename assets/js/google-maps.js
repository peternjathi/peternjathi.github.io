function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -1.24627000, lng: 36.66291000};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Dret Mox, Ltd' // Title Location
    });
}