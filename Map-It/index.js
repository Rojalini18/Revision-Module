var location_arr = [
  ["Bhubaneswar", 20.3117397, 85.8537418, 13],
  ["Cuttuck", 20.4630933, 85.7977051, 12],
  ["Jagatsinghpur", 20.2490365, 86.1321251, 13],
];

var map = new google.maps.Map(document.getElementById("mapit"), {
  zoom: 10,
  center: new google.maps.LatLng(28.6041, 77.3025),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
});

var info = new google.maps.InfoWindow();

var mark_it, i;

for (i = 0; i < location_arr.length; i++) {
  mark_it = new google.maps.Marker({
    position: new google.maps.LatLng(location_arr[i][1], location_arr[i][2]),
    map: map,
  });

  google.maps.event.addListener(
    mark_it,
    "click",
    (function (mark_it, i) {
      return function () {
        info.setContent(location_arr[i][0]);
        info.open(map, mark_it);
      };
    })(mark_it, i)
  );
}
