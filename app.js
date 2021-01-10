window.addEventListener('load', () =>{
    let long;
    let lat;
    let TemperatureDegree = document.querySelector(".temperature-degree");
    let Timezone = document.querySelector(".location-timezone");
    let TempDesc = document.querySelector(".temperature-description");
    let Icon = document.querySelector(".icon-image");
    let TempSection = document.querySelector(".degree-section");
    let TempDegree = document.querySelector(".degree-section span");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(position);
            fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=6c4169f7fb522f8fdd4865a5f909c29e')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            var temp = data.main.temp;
            var location = data.name; 
            var desc = data.weather[0].description;
            var img = data.weather[0].icon;
            // var wpic = data.weather[0].main;            // var temp = data['main']['temp'];
            temp = temp - 273.15;
            TemperatureDegree.textContent = (temp).toFixed(2);
            TempDegree.textContent = '°C';
            Timezone.textContent = location;
            TempDesc.textContent = desc;
            Icon.src = `http://openweathermap.org/img/wn/${img}@4x.png`;

            TempSection.addEventListener('click', () =>{
                // var C = '&#8451;';
                // var F = '&#8457;';
                if(TempDegree.textContent === '°C'){
                    TempDegree.textContent = '°F';
                    temp = (temp * 9/5) + 32;
                    TemperatureDegree.textContent = (temp).toFixed(3);
                }
                else
                {
                    TempDegree.textContent = '°C';
                    temp = (temp -32) * 5/9;
                    TemperatureDegree.textContent = (temp).toFixed(2);
                }
            });
            // setIcons(wpic, Icon);
        });
    //     fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat='+ lat +'&lon='+ long +' &callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html', {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-key": "a9e9660466msh60042ac47d909b3p19da2fjsn53b58d5d9f0c",
	// 	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    //         }
    //     })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
        });
    }
    // function setIcons(icon, iconId){
    //     const skycons = new Skycons({color: "white"});
    //     const currentIcon = icon.toUpperCase();
    //     skycons.play();
    //     return skycons.set(iconId, Skycons[currentIcon]);
    // }
});