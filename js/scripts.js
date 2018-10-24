$(function () {
  $("#cityForm").on('submit', function (event) {
    event.preventDefault();
    var city = $("#cityName").val();
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=081d0c803df0b9bbe964b30ea535c62b')
      .then(res => res.json())
      .then(weather => {
        var idForm = $("#cityId").val();
        var idReal = `${weather.id}`;
        if (idReal == idForm) {
          var text = "There will be ";
          text += `${weather.weather[0].main} in ${weather.name}`;
          $("#output").html(text);
        } else {
          $("#output").html("City and ID does not match");
        }
      })
      .catch($("#output").html("City is not found"))
  })
})