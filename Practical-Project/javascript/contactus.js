//Google Maps javascript on the contactus page.
function initMap() {
    let leicester = {
        lat: 52.922530,
        lng: -1.474619
    };
    let dmu = {
        lat: 52.914452,
        lng: -1.466278
    };
    let uol = {
        lat: 52.807316,
        lng: -1.643111
    };
    let mapDemo = document.getElementById("map");

    // this sets the default location for when the map is first loaded
    let map = new google.maps.Map(mapDemo, {
        zoom: 13,
        center: leicester
    });

    // these set different markers you want to show on your map
    let markerDMU = new google.maps.Marker({
        position: dmu,
        map: map,
        title: 'The Good Guys'
    });
    let markerUoL = new google.maps.Marker({
        position: uol,
        map: map,
        title: 'The Bad Guys'
    });
}

function displayTime() {
    var time = new Date(),
        midnight = new Date();
    midnight.setHours(0);
    midnight.setMinutes(0);
    midnight.setSeconds(0);

    // Seconds/Minutes/Hours from today:
    var seconds = (time.getTime() - midnight.getTime()) / 1000,
        minutes = seconds / 60,
        hours = minutes / 60;

    document.getElementById('offset-hours').style.transform = 'rotate(' + (hours % 12 / 12 * 360) + 'deg)';
    document.getElementById('offset-minutes').style.transform = 'rotate(' + (minutes / 60 * 360) + 'deg)';
    document.getElementById('offset-seconds').style.transform = 'rotate(' + (seconds / 60 * 360) + 'deg)';

}
displayTime();
