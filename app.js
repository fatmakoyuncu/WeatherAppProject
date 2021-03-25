var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
// var desc_value = document.querySelector('.desc_value');
var temp_value = document.querySelector('.temp_value');
var guesbottom = document.querySelector('.guess-bottom')

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=9effb470cd867cdfdf8f0e2b39dac9b1')
        .then(response => response.json())
        .then(data => {
            var tempValue = Math.round(parseFloat(data['main']['temp']) - 273.15) + '&#8451';
            var descValue = data['weather'][0]['description'];

            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;


            switch (true) {
                case descValue == "clear sky": document.getElementById("icon").innerHTML = "<img src='weather_images/clear.png' style=' width:150px; height:150px' >"; break;
                case descValue == "few clouds": document.getElementById("icon").innerHTML = "<img src='weather_images/clouds.png' style='width:150px; height:150px'>"; break;
                case descValue == "light rain": document.getElementById("icon").innerHTML = "<img src='weather_images/rainy.png' style=' width:150px; height:150px'>"; break;
                case descValue == "light snow": document.getElementById("icon").innerHTML = "<img src='weather_images/snow.png' style=' width:150px; height:150px'>"; break;
                case descValue == "overcast clouds": document.getElementById("icon").innerHTML = "<img src='weather_images/snow.png' style=' width:150px; height:150px'>"; break;
                case descValue == "haze": document.getElementById("icon").innerHTML = "<img src='weather_images/haze.png' style=' width:150px; height:150px'>"; break;
                case descValue == "scattered clouds": document.getElementById("icon").innerHTML = "<img src='weather_images/scattered_clouds.png' style=' width:150px; height:150px'>"; break;
                case descValue == "broken clouds": document.getElementById("icon").innerHTML = "<img src='weather_images/clouds.png' style=' width:150px; height:150px'>"; break;

            }


            // document.getElementById('bottom').style.display = 'flex';

//scattered clouds şimşek
//haze puslu
//broken clouds parçalı

        })

        .catch(err => alert("Böyle bir şehir bulunamamıştır."))

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&appid=9effb470cd867cdfdf8f0e2b39dac9b1')
        .then(response => response.json())
        .then(data => {

            for (var i = 0; i < 5; i++) {
                var tValue = Math.round(parseFloat(data['list'][i]['main']['temp']) - 273.15) + '°C';
                // var dValue = data['list'][i]['weather'][i]['description'];

                let dizi = [];
                dizi[i] = tValue;
      
                guesbottom.children[i].children[2].innerText = dizi[i];
         
                console.log(dizi)

            }

//°C





        })


})